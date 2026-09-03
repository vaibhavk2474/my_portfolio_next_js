import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import xss from 'xss';
import { XSS_BACKEND_CONFIG } from '@/lib/sanitizeConfig';

const username = process.env.GMAIL_NODEMAILER_USERNAME;
const password = process.env.GMAIL_NODEMAILER_PASSWORD;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: username,
        pass: password,
    },
});

function formatEmailBody(subject: string, rawHtml: string) {
    const cleanHtml = xss(rawHtml, XSS_BACKEND_CONFIG);

    return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 24px; background-color: #f6f8fc; font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; border: 1px solid #dadce0; overflow: hidden;">
        <tr>
          <td style="padding: 24px 32px 16px 32px; border-bottom: 1px solid #f1f3f4;">
            <span style="font-size: 13px; font-weight: 600; color: #1a73e8; text-transform: uppercase; letter-spacing: 0.5px;">Message</span>
            <h2 style="margin: 6px 0 0 0; font-size: 18px; color: #202124; font-weight: 500;">${subject || 'No Subject'}</h2>
          </td>
        </tr>
        <tr>
          <td style="padding: 24px 32px 32px 32px;">
            ${cleanHtml}
          </td>
        </tr>
        <tr>
          <td style="padding: 16px 32px; background-color: #f8f9fa; border-top: 1px solid #f1f3f4; font-size: 12px; color: #5f6368; text-align: left;">
            Sent securely via Web Portal
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

export async function POST(request: Request) {
    try {
        // 1. Parse Multipart Form Data
        const formData = await request.formData();

        const fromEmail = formData.get('fromEmail') as string;
        const subject = (formData.get('subject') as string) || 'No Subject';
        const message = (formData.get('message') as string) || '';
        const toEmailListRaw = formData.get('toEmailList') as string;

        const toRecipients: string[] = toEmailListRaw ? JSON.parse(toEmailListRaw) : [];

        if (!toRecipients.length) {
            return NextResponse.json({ msg: 'No recipients provided.' }, { status: 400 });
        }

        // 2. Process File Attachments into Buffers
        const files = formData.getAll('files') as File[];
        const nodemailerAttachments = await Promise.all(
            files.map(async (file) => {
                const arrayBuffer = await file.arrayBuffer();
                return {
                    filename: file.name,
                    content: Buffer.from(arrayBuffer),
                    contentType: file.type,
                };
            })
        );

        // 3. Format and Sanitize HTML
        const safeSubject = subject.replace(/[\r\n]/g, '').trim();
        const html = formatEmailBody(safeSubject, message);

        // 4. Send via Nodemailer
        const result = await transporter.sendMail({
            from: `"Web Portal" <${username}>`,
            replyTo: fromEmail,
            to: toRecipients,
            subject: safeSubject,
            text: message.replace(/<[^>]*>?/gm, ''), // Plain text fallback
            html,
            attachments: nodemailerAttachments,
        });

        return NextResponse.json({
            msg: 'Email sent successfully',
            messageId: result.messageId,
        });
    } catch (error: any) {
        console.error('Mail API Error:', error);
        return NextResponse.json(
            { msg: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}