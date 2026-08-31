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

const ALL_TO_EMAIL_LIST = []

export async function POST(request: Request, res: Response) {

  try {

    const req = await request.json();

    ALL_TO_EMAIL_LIST.push(req.toEmailList)

    console.error('.....................................')
    const html = formatEmailBody(req, req.message)
    console.error('.....................................html...', typeof html)

    const result = await transporter.sendMail({
      from: req.fromEmail,
      to: req.toEmailList,
      cc: 'cc-recipient@example.com', // CC recipient
      bcc: 'bcc-recipient@example.com', // BCC recipient
      subject: req.subject,
      text: req.message,
      html,
      attachments: [{
        filename: 'resume.pdf',
        path: filePath,
        contentType: 'application/pdf'
      }],
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
function formatEmailBody(req = { subject: '' }, rawText: string) {
  // const paragraphs = rawText
  //   .split(/\n+/)
  //   .map(p => `<p style="margin: 0 0 14px 0; line-height: 1.6; color: #202124; font-size: 14px;">${p.trim()}</p>`)
  //   .join('');

  const cleanHtml = xss(rawText, XSS_BACKEND_CONFIG);

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 24px; background-color: #f6f8fc; font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
      
      <!-- Main Email Card -->
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; border: 1px solid #dadce0; overflow: hidden;">
        
        <!-- Header / Sender Accent Bar -->
        <tr>
          <td style="padding: 24px 32px 16px 32px; border-bottom: 1px solid #f1f3f4;">
            <span style="font-size: 13px; font-weight: 600; color: #1a73e8; text-transform: uppercase; letter-spacing: 0.5px;">Message</span>
            <h2 style="margin: 6px 0 0 0; font-size: 18px; color: #202124; font-weight: 500;">${req.subject || 'No Subject'}</h2>
          </td>
        </tr>

        <!-- Body Content -->
        <tr>
          <td style="padding: 24px 32px 32px 32px;">
            ${cleanHtml}
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