import nodeMailer from "nodemailer";

export const sendMail = async (req, res) => {
  try {
    const { name, email, message, services } = req.body;

    const html = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <h1>Новое сообщение!</h1>
        <p>${name}</p>
        <p>${email}</p>
        <p>${message}</p>
        <ul>
          ${services.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    `;

    nodeMailer.createTransport({
      host: "mail"
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось отправить сообщение",
    });
  }
};
