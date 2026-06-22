/* eslint-disable prettier/prettier */
import nodemailer from "nodemailer";

type MailOptions = {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
};

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (transporter) {
    return transporter;
  }

  const smtpServer = process.env.SMTP_SERVER;
  const smtpPort = process.env.SMTP_PORT;
  const emailAddress = process.env.EMAIL_ADDRESS;
  const emailPassword = process.env.EMAIL_PASSWORD;

  if (!smtpServer || !smtpPort || !emailAddress || !emailPassword) {
    throw new Error(
      "SMTP configuration missing. Please set SMTP_SERVER, SMTP_PORT, EMAIL_ADDRESS, and EMAIL_PASSWORD environment variables."
    );
  }

  transporter = nodemailer.createTransport({
    host: smtpServer,
    port: parseInt(smtpPort, 10),
    secure: false, // Use TLS (STARTTLS) instead of SSL
    auth: {
      user: emailAddress,
      pass: emailPassword,
    },
  });

  return transporter;
}

export async function sendEmail(options: MailOptions): Promise<boolean> {
  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS || "noreply@teksys-services.com",
      to: options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    });

    return true;
  } catch (error) {
    console.error("Email send failed:", error);
    return false;
  }
}

export async function verifySmtpConnection(): Promise<boolean> {
  try {
    const transporter = getTransporter();
    await transporter.verify();
    console.log("SMTP connection verified");
    return true;
  } catch (error) {
    console.error("SMTP verification failed:", error);
    return false;
  }
}
