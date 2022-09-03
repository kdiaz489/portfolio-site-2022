import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

type ResData = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let body = req.body;
    let transporter: Transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: 'kstefdiaz@gmail.com',
        pass: 'mxhnknkjjemkkhlc',
      },
      secure: true,
    });

    let options = {
      sender: `${body.email}`,
      to: 'kstefdiaz@gmail.com',
      subject: `${body.subject} test`,
      text: `${body.message} \n\n\n Sent by ${body.email}`,
    };

    let result: SMTPTransport.SentMessageInfo = await transporter.sendMail(
      options
    );

    res.status(200).json({ success: true });
  } catch (error: any) {
    res.status(400).json({ success: false, error });
  }
}
