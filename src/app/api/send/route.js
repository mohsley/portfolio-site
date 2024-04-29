import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <p>
            Greetings! <br></br> <br></br>This is an automated message letting
            you know that I recived your message, I will get back to you
            shortly.<br></br> <br></br>Thanks for reaching out, <br></br>{" "}
            <br></br>Mohamad Saleh
          </p>
          <center>Your Original Message Below</center>
          <hr />
          <h1>{subject}</h1>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
