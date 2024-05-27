import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vaibhavk2474@gmail.com',
    pass: 'meio zwwm voqe quis'
  }
});

const ALL_TO_EMAIL_LIST = []

export async function POST(request: Request, res: Response) {

  try {

    const req = await request.json();
    console.log("request...", req);

    ALL_TO_EMAIL_LIST.push(req.toEmailList)

    const result = await transporter.sendMail({
      from: req.fromEmail,
      to: req.toEmailList,
      // cc: 'cc-recipient@example.com', // CC recipient
      // bcc: 'bcc-recipient@example.com', // BCC recipient
      subject: req.subject,
      text: req.message,
      attachments: [{
        filename: 'resume.pdf',
        path: `https://firebasestorage.googleapis.com/v0/b/reels-yt-16e79.appspot.com/o/VAIBHAV's%20Resume%20updated.pdf?alt=media&token=c1f9b6d2-5593-4894-ac7a-1e31737c3b95`,
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