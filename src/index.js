import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors"

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({ origin: "https://ingemma.com.ar/", methods: ["GET", "POST", "PUT"] })
);

app.post("/api/email", async (req, res) => {

  nodemailer.createTestAccount(async (err, account) => {
    var transporter = nodemailer.createTransport({
      service: process.env.NODEMAILER_SERVICE,
      port: process.env.NODEMAILER_PORT,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

  transporter.sendMail(
      {
        from: process.env.NODEMAILER_USER,
        to: process.env.NODEMAILER_USER,
        subject: `Consulta enviada por: ${req.body.name}`,
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
