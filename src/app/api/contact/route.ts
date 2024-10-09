import { EmailTemplate } from '@/components';
import client from '@/config/resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = await client.emails.send({
      from: process.env.EMAIL_FROM ?? '',
      to: process.env.EMAIL_TO ?? '',
      subject: 'Portfolio Contact Form',
      react: EmailTemplate({ ...body }),
      replyTo: body.email,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
