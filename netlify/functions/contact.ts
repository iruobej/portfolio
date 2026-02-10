import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const handler: Handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
    }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: corsHeaders, body: "Method Not Allowed" };
  }

  try {
    const { subject, message, fromEmail, fromName } = JSON.parse(event.body || "{}");

    if (!subject || !message) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: "Missing subject or message" }),
      };
    }

    // Basic anti-spam / sanity
    const cleanSubject = String(subject).slice(0, 120);
    const cleanMessage = String(message).slice(0, 5000);

    const replyTo = fromEmail ? String(fromEmail).slice(0, 200) : undefined;
    const name = fromName ? String(fromName).slice(0, 120) : "Anonymous";

    const data = await resend.emails.send({
      // Must be a verified sender/domain in Resend
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL as string],
      subject: `Contact: ${cleanSubject}`,
      replyTo: replyTo ? [replyTo] : undefined,
      text: `From: ${name}${replyTo ? ` <${replyTo}>` : ""}\n\n${cleanMessage}`,
    });

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ ok: true, id: data.data?.id }),
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Failed to send email", details: err?.message }),
    };
  }
};
