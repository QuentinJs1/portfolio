import type { NextApiRequest, NextApiResponse } from 'next'

export default function Contact(req: NextApiRequest, res: NextApiResponse) {
    require('dotenv').config()

    const nodemailer = require('nodemailer')

    let transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD
      },
    });

    const mailData = {
      from: process.env.MAIL,
      to: 'contact@luden.fr',
      subject: `${req.body.name}`,
      text: req.body.message,
      html: `<div>${req.body.message}</div><p>Envoyé depuis :
      ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err: any, info: any) {
        if(err)
          console.log(err)
        else
          console.log(info)
    })
    res.status(200).end()
}