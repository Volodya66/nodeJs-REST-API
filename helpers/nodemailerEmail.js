const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "volodymyr.VP@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const nodemailerEmail = async (data) => {
  const email = { ...data, from: "volodymyr.VP@meta.ua" };
  transport.sendMail(email);
  return true;
};

module.exports = nodemailerEmail;
