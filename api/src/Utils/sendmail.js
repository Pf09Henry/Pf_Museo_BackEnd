const nodemailer= require ("nodemailer")

function sendMail({mail, subject, message}){
    const config = {
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "pf09henry@gmail.com",
        pass: "yvsbutzpqcuaslwe",
      },
    };
    const mail_config = {
      from: "pf09henry@gmail.com",
      to: `${mail}`,
      subject: `${subject}`,
      html: `<div
            style="
              background: linear-gradient(to right, #1d2671, #ff4e5b);
              height: 100vh;
              justify-content: center;
              width: 500px;
              height: 500px;
              border-radius: 30px;
              padding: 20px;
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            "
          >
            
            <h1 style="font-size: 30px; color: rgb(214, 214, 241); text-align: center">
              ${message}
            </h1>
          </div>`,
  } 
  const transport = nodemailer.createTransport(config);
  transport.sendMail(mail_config)
}

module.exports = sendMail