// app/api/send-enquiry/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    if (!toEmail) {
      return NextResponse.json({ error: "Receiver email not configured" }, { status: 500 });
    }

    await resend.emails.send({
      from: "Pawan AAYUMED <onboarding@resend.dev>", // temporary test sender — works on free tier
      to: toEmail,
      subject: "New Enquiry from Website",
      html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${String(name)}</p>
        <p><strong>Email:</strong> ${String(email)}</p>
        <p><strong>Phone:</strong> ${String(phone ?? "")}</p>
        <hr/>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("send-enquiry error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
