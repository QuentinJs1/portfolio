import type { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse) {
    require('dotenv').config()

    const nodemailer = require('nodemailer')
    const AWS = require('aws-sdk');
    AWS.config.update({region:'eu-west-3'});

    AWS.config.update({
        accessKeyId: 'AKIAZNYXCBVMLNOCAXUM',
        secretAccessKey: process.env.SECRET_KEY
    });

    const transporter = nodemailer.createTransport({
        SES: new AWS.SES({
            apiVersion: '2010-12-01'
        })
      })

      const mailData = {
        from: 'quentinchaignauduniv@gmail.com',
        to: 'contact@luden.fr',
        subject: `Message de ${req.body.name}`,
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
    res.status(200)
}