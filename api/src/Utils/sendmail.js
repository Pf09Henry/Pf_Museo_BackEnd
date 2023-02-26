const nodemailer = require("nodemailer")
// const { Event } = require("../db");


function sendMail({ mail, subject, message, ticket, event }) {
  // console.log(mail, subject, message, ticket);
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "pf09henry@gmail.com",
      pass: "yvsbutzpqcuaslwe",
    },
  };
  // var name = '';
  // const traerEventos = async() => {
  //   const event = await Event.findOne({
  //     where: {
  //       id: ticket.eventId,
  //       status: true
  //     }
  //   })    
  //   return name = event.dataValues.name;
  // }

  let mail_config = {}
  if (ticket != undefined) {
    
    // traerEventos().then((valor) => {
    //   // const name = JSON.parse(JSON.stringify(valor.dataValues.name))
    //   name = valor
    //   // console.log(valor)
    // });

    // console.log(traerEventos().then(valor => {
    //   return valor
    // }))
    mail_config = {
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
              <h1 style="font-size: 30px; color: rgb(214, 214, 241); text-align: center">
              Cantidad: ${ticket.amount}
              </h1>
              <h1 style="font-size: 30px; color: rgb(214, 214, 241); text-align: center">
              Nombre Evento: ${event}
              </h1>
              <h1 style="font-size: 30px; color: rgb(214, 214, 241); text-align: center">
                Total: ${ticket.totalOfPurchase}
              </h1>
            </div>`,
    }
  } else {
    
    mail_config = {
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
  }

  const transport = nodemailer.createTransport(config);
  transport.sendMail(mail_config)
}

module.exports = sendMail