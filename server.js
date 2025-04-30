const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config()

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extender: false}))
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const {name, email, subject, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS

        }
    });
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject,
        text:`Nome: ${name}\nEmail: ${email}\nMensagem:\n${message}`
    
    };
    
    try{
        await transporter.sendMail(mailOptions);
            res.send('OK')
    }catch(err){
        res.status(500).send('Erro ao enviar formulario.')
    }
    
});
app.listen(3000, () => {
    console.log('servidor rodando em http://localhost:3000');
})

