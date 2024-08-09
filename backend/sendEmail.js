import nodemailer from 'nodemailer';

export const sendEmail = async (to, subject, html) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        tls: {
            rejectUnauthorized: false
          },
        auth: {
            user: process.env.EMAILSENDER,
            pass: process.env.EMAILPASS,
        },
    });
    
    const mailOptions = {
        from: process.env.EMAILSENDER,
        to,
        subject,
        html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent :' + info.response);
        
        return info;
        
    } catch (error) {
        console.error('Error email sending:', error);
        throw error;
    }
};
