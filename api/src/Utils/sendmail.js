const nodemailer= require ("nodemailer")
async function sendmail(mail,tipodemail){

    const config = {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "pf09henry@gmail.com",
          pass: "yvsbutzpqcuaslwe",
        },
      };
    
      const messageWelcome = {
        from: "pf09henry@gmail.com",
        to: mail,
        subject: "Bienvenido/a a la pagina oficial del museo de ciencias",
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
          ¡Bienvenido a la pagina oficial del museo de ciencias!
        </h1>
        <p
          style="
            font-size: 20px;
            text-align: justify;
            color: rgb(220, 220, 250);
            letter-spacing: 1px;
          "
        >
          Tu cuenta ha sido registrada exitosamente :) <br />
        </p>
      </div>`,
      };

        const messageDonacion = {
        from: "pf09henry@gmail.com",
        to: mail,
        subject: "Donacion realizada",
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
            ¡Donacion realizada!
        </h1>
        <p
            style="
            font-size: 20px;
            text-align: justify;
            color: rgb(220, 220, 250);
            letter-spacing: 1px;
            "
        >
            Tu donacion ha sido registrada exitosamente :) <br />
        </p>
        </div>`,
        };

    
      const transport = nodemailer.createTransport(config);
    
      if (tipodemail === "welcome") await transport.sendMail(messageWelcome);
      if (tipodemail === "donacion") await transport.sendMail(messageDonacion);
      if (tipodemail === "compras") await transport.sendMail(messageWelcome);
   
}
module.exports={sendmail}