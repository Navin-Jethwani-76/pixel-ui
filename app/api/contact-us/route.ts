import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASS,
  },
});

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  if (!name || !email || !message)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL, // sender address
      to: process.env.NODEMAILER_EMAIL, // forwarding to self for now
      subject: `${process.env.NEXT_PUBLIC_SITE_NAME} - Message from ${name}`, // Subject line
      text: `${name} -  (${email})\n\n${message}`, // plain text body
    });
    return NextResponse.json(
      { message: "Message Sent Successfully!" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ error: error.message }, { status: 400 });
    else
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
  }
}
