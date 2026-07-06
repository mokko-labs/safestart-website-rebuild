const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, organization, email, phone, helpMessage } = req.body;

  if (!firstName || !lastName || !organization || !email || !phone || !helpMessage) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const msg = {
    to: 'info@safestartmedical.com',
    from: 'no-reply@safestartmedical.com', // Use a verified sender in SendGrid
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    text: `You have received a new message from the SafeStart Medical website contact form.\n\nName: ${firstName} ${lastName}\nOrganization: ${organization}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${helpMessage}`,
    html: `<h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Organization:</strong> ${organization}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br>${helpMessage.replace(/\n/g, '<br>')}</p>`
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}; 