import { NextRequest, NextResponse } from 'next/server';
import FormData from 'form-data';
import Mailgun from 'mailgun.js';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, inquiryType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !inquiryType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Initialize Mailgun
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY || '',
    });

    // Prepare email content
    const inquiryTypeLabel = inquiryType || 'General Inquiry';
    const emailSubject = `New Enquiry Submission - ${inquiryTypeLabel}`;

    const emailText = `
New Enquiry Submission from Hahobal Biopharmaceuticals India Pvt Ltd Website

Name: ${name}
Email: ${email}
Phone: ${phone}
Inquiry Type: ${inquiryTypeLabel}

Message:
${message}

---
This email was sent from the Hahobal Biopharmaceuticals India Pvt Ltd enquiry form.
Reply directly to: ${email}
Contact number: ${phone}
    `.trim();

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #0a5c57; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f8fafc; padding: 30px; border-radius: 8px; margin-top: 20px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #0a5c57; display: block; margin-bottom: 5px; }
    .value { background-color: white; padding: 10px; border-radius: 4px; border-left: 3px solid #0a5c57; }
    .message-box { background-color: white; padding: 15px; border-radius: 4px; border: 1px solid #e0e0e0; white-space: pre-wrap; }
    .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">New Enquiry Submission</h1>
      <p style="margin: 5px 0 0 0;">Hahobal Biopharmaceuticals India Pvt Ltd</p>
    </div>

    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <div class="value">${name}</div>
      </div>

      <div class="field">
        <span class="label">Email:</span>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>

      <div class="field">
        <span class="label">Phone:</span>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>

      <div class="field">
        <span class="label">Inquiry Type:</span>
        <div class="value">${inquiryTypeLabel}</div>
      </div>

      <div class="field">
        <span class="label">Message:</span>
        <div class="message-box">${message}</div>
      </div>
    </div>

    <div class="footer">
      <p>This email was sent from the Hahobal Biopharmaceuticals India Pvt Ltd enquiry form.</p>
      <p>Reply directly to this email to respond to the inquiry.</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Send email via Mailgun
    const result = await mg.messages.create(
      process.env.MAILGUN_DOMAIN || '',
      {
        from: process.env.MAILGUN_FROM_EMAIL || '',
        to: [process.env.RECIPIENT_EMAIL || ''],
        'h:Reply-To': email, // Allow direct reply to the sender
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
      }
    );

    console.log('Email sent successfully:', result);

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been sent successfully. We will get back to you soon.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      {
        error: 'Failed to send email. Please try again later or contact us directly at info@hahoballifesciences.com',
      },
      { status: 500 }
    );
  }
}
