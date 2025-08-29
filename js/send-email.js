const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { nom, email, message } = req.body;

  try {
    // Configuration du transporteur
    const transporter = nodemailer.createTransport({
      service: "gmail", // ou smtp
      auth: {
        user: "lrafiou491@gmail.com",
        pass: "funvoyaxaacpjcqgk", // utiliser mot de passe app Gmail
      },
    });

    // Contenu du mail
    const mailOptions = {
      from: email,
      to: "lrafiou491@gmail.com",
      subject: `Message de ${nom}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erreur envoi mail:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
