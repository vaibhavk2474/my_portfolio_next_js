import nodemailer from 'nodemailer'
import path from 'node:path';
import { XSS_BACKEND_CONFIG } from '@/lib/sanitizeConfig';
import xss from 'xss';


const username = process.env.GMAIL_NODEMAILER_USERNAME
const password = process.env.GMAIL_NODEMAILER_PASSWORD
const filePath = path.join(process.cwd(), 'public', "pdfs", 'VAIBHAV_KUMAR_FlowCV_Resume_2026-06-09.pdf');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: username,
    pass: password
  }
});

export async function POST(request: Request, res: Response) {
  try {
    const formData = await request.formData();
    const emailJsonString = formData.get('emailJsonData') as string;
    const files = formData.getAll('files') as File[];

    const emailJsonData = JSON.parse(emailJsonString)
    console.log('formData: emailJsonData, attachments ', emailJsonData, files)

    const html = formatEmailBody(emailJsonData.subject, emailJsonData.message)

    const filePaths = emailJsonData.filePaths || [];

    const resolvedFilePaths = filePaths.map((filePath: string) => {
      const p = path.join(process.cwd(), 'public', "pdfs", filePath);
      return {
        filename: filePath,
        path: p,
        contentType: 'application/pdf'
      }
    });

    // Convert files to attachments for nodemailer
    const attachments = await Promise.all(
      files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        return {
          filename: file.name,
          content: Buffer.from(arrayBuffer),
          contentType: file.type,
        };
      })
    );

    const result = await transporter.sendMail({
      from: `"Vaibhav Kumar" <vaibhavk2474@gmail.com>`,
      to: emailJsonData.toEmailList,
      cc: emailJsonData.cc,
      bcc: emailJsonData.bcc,
      subject: emailJsonData.subject,
      text: emailJsonData.message,
      html,
      attachments: [...attachments, ...resolvedFilePaths]
    });

    const res = JSON.stringify(result, null, 4)

    return Response.json({
      msg: "done",
      data: res
    })
  } catch (error) {
    console.log("errror", error);

    const obj = { msg: (error as Error).message };

    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });

    return new Response(blob, {
      status: 500,
    })
  }

}

// Convert raw textarea line breaks into styled HTML paragraphs
function formatEmailBody(subject: string, rawText: string) {
  // const paragraphs = rawText
  //   .split(/\n+/)
  //   .map(p => `<p style="margin: 0 0 14px 0; line-height: 1.6; color: #202124; font-size: 14px;">${p.trim()}</p>`)
  //   .join('');

  const cleanedParagraphs = rawText
    .replace(/<p>\s*(?:&nbsp;|<br\s*\/?>)?\s*<\/p>/gi, '')
    .trim();
  const cleanHtml = xss(cleanedParagraphs, XSS_BACKEND_CONFIG);
  console.log("cleanHtml", cleanHtml, typeof cleanHtml);

  const cleanedParagraphs1 = rawText
    .replace(/<p[^>]*>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, '<br/>')
    .trim();

  const cleanHtml1 = xss(cleanedParagraphs1, XSS_BACKEND_CONFIG);
  console.log("cleanHtml1", cleanHtml1, typeof cleanHtml1);

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <style>
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        table.email-table {
          margin: 0 auto;
        }
      </style>
    </head>
    <body style="margin: 0; padding: 24px; background-color: #f6f8fc; font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
      
      <!-- Main Email Card -->
      <table class="email-table" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; border: 1px solid #dadce0; overflow: hidden;">
        
        <!-- Header / Sender Accent Bar -->
        <tr>
          <td style="padding: 24px 32px 16px 32px; border-bottom: 1px solid #f1f3f4;">
            <span style="font-size: 13px; font-weight: 600; color: #1a73e8; text-transform: uppercase; letter-spacing: 0.5px;">Message</span>
            <h2 style="margin: 6px 0 0 0; font-size: 18px; color: #202124; font-weight: 500;">${subject || 'No Subject'}</h2>
          </td>
        </tr>

        <!-- Body Content -->
        <tr>
          <td style="padding: 24px 32px 32px 32px;">
            ${cleanHtml1}
          </td>
        </tr>

        <!-- Footer / Signature -->
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