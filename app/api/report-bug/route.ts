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
  const data = await request.json();
  if (!data) {
    return NextResponse.json({ error: "Data Invalid" }, { status: 401 });
  }
  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL, // sender address
      to: process.env.NODEMAILER_EMAIL, // forwarding to self for now
      subject: `${process.env.NEXT_PUBLIC_SITE_NAME} - Bug Report from ${data?.email}`, // Subject line
      text: `${JSON.stringify(data)}`, // plain text body
    });
    return NextResponse.json({ message: "Bug Reported" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 401 }
    );
  }
}
