const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const config = {
  nodemailerService: process.env.NODEMAILER_SERVICE,
  nodemailerPort: process.env.NODEMAILER_PORT,
  nodemailerUser: process.env.NODEMAILER_USER,
  nodemailerPassword: process.env.NODEMAILER_PASSWORD,
};

app.post("/api/form", async (req, res) => {
  nodemailer.createTestAccount(async (err, account) => {
    var transporter = nodemailer.createTransport({
      service: config.nodemailerService,
      port: config.nodemailerPort,
      auth: {
        user: config.nodemailerUser,
        pass: config.nodemailerPassword,
      },
    });

    transporter.sendMail(
      {
        from: config.nodemailerUser,
        to: config.nodemailerUser,
        subject: `Consulta ${req.body.name}`,
        html: `
        <div>   
        <h1>Datos de la consulta:</h1>
        <p>Nombre y apellido: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>Consulta: ${req.body.consult}</p>
        </div>
        `,
      },
      (err, info) => {
        if (err) {
          return console.log(err);
        }
        console.log("Mensaje enviado con exito");
        res.redirect("/");
      }
    );
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor a la escucha en el puerto ${PORT}`);
});
