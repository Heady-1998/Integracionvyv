const nodemailer = require('nodemailer');
let sendEmailPassword = async (name,email,password)=>{
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vigitracklatam@gmail.com',
            pass: 'Puma150012'
        }
    });

    let mailOptions = {
        from: 'virtualcode7ecuador@gmail.com',
        to: email,
        subject: 'CES EXPRESS - CREACION DE USUARIO',
        text: 'SU CONTRASEÑA TEMPORAL ES : '+password
    };


    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado: ' + info.response);

        return true

    } catch (error) {
        console.log(error);
    }

    return false

}

module.exports = {sendEmailPassword}