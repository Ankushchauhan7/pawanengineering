export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ✅ Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",      // Hostinger SMTP host
      port: 465,                        // SSL port
      secure: true,                     // true for port 465
      auth: {
        user: process.env.HOSTINGER_EMAIL,
        pass: process.env.HOSTINGER_PASSWORD,
      },
    });

    // ✅ Email goes to support@pawanengineering.com
    await transporter.sendMail({
      from: `"Pawan Engineering" <${process.env.HOSTINGER_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL,       // support@pawanengineering.com
      replyTo: email,                          // visitor's email — reply goes to them
      subject: `New Enquiry from ${name}`,
      html: `
        <h2 style="color:#1a1a2e;">New Website Enquiry</h2>
        <table style="font-family:Arial;font-size:14px;border-collapse:collapse;width:100%">
          <tr>
            <td style="padding:8px;font-weight:bold;width:100px;">Name</td>
            <td style="padding:8px;">${String(name)}</td>
          </tr>
          <tr style="background:#f5f5f5">
            <td style="padding:8px;font-weight:bold;">Email</td>
            <td style="padding:8px;">${String(email)}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;">Phone</td>
            <td style="padding:8px;">${String(phone ?? "Not provided")}</td>
          </tr>
          <tr style="background:#f5f5f5">
            <td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td>
            <td style="padding:8px;">${String(message).replace(/\n/g, "<br/>")}</td>
          </tr>
        </table>
        <p style="color:#888;font-size:12px;margin-top:20px;">
          This enquiry was submitted from pawanengineering.com
        </p>
      `,
    });

    return NextResponse.json({ ok: true });

  } catch (err: any) {
    console.error("Hostinger mail error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}