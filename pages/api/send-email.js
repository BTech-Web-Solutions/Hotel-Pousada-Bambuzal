import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  // Crie um objeto com as configurações do seu serviço de e-mail
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Envie o e-mail
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "destinatario@gmail.com",
      subject: `Novo e-mail de ${name}`,
      html: `<p>${message}</p><br><p>Responder para: ${email}</p>`,
    });

    console.log(`E-mail enviado: ${info.messageId}`);

    res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error(`Erro ao enviar e-mail: ${error}`);

    res.status(500).json({ message: "Erro ao enviar e-mail" });
  }
}
