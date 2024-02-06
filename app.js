const express = require("express");
const logger = require("morgan");
const cors = require("cors");
// const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// const { META_PASSWORD } = process.env;

// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "volodymyr.VP@meta.ua",
//     pass: META_PASSWORD,
//   },
// };

// const transport = nodemailer.createTransport(nodemailerConfig);
// const emailOptions = {
//   from: "volodymyr.VP@meta.ua",
//   to: "volodya1015@gmail.com",
//   subject: "Nodemailer test",
//   text: "Привіт. Ми тестуємо надсилання листів! і",
// };

// transport
//   .sendMail(emailOptions)
//   .then((info) => console.log(info))
//   .catch((err) => console.log(err));

const authRouter = require("./routes/api/auth");
const contactsRouter = require("./routes/api/contacts");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
