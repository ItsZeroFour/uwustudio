import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendQuizMail = async (req, res) => {
  try {
    const { name, message, services, contactType, contact } = req.body;

    const html = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <h1>Новое сообщение!</h1>
        <p>Имя: ${name}</p>
        <p>Контакт: ${contact}</p>
        <p>Сообщение: ${message}</p>
        <p>Тип связи: ${contactType}</p>
        <p>Сервисы:</p>
        <ul>
          <li>Тип сайта: ${services.questionAnswer1}</li>
          <li>Масштабность сайта: ${services.questionAnswer2}</li>
          <li>Доп. услуги: ${services.questionAnswer3}</li>
          <li>Дизайн: ${services.questionAnswer4}</li>
          <li>Другое: ${services.questionAnswer5}</li>
        </ul>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL, // Адрес отправителя
      to: process.env.EMAIL, // Адрес получателя
      subject: `Новое сообщение из квиза`,
      html: html,
    });

    res.send("Сообщение отправлено!");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось отправить сообщение",
    });
  }
};

export const sendMail = async (req, res) => {
  try {
    const { name, message, email } = req.body;

    const html = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <h1>Новое сообщение!</h1>
        <p>Имя: ${name}</p>
        <p>E-mail: ${email}</p>
        <p>Сообщение: ${message}</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL, // Адрес отправителя
      to: process.env.EMAIL, // Адрес получателя
      subject: `Новое сообщение`,
      html: html,
    });

    res.send("Сообщение отправлено!");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось отправить сообщение",
    });
  }
};
