import * as React from 'react';

interface EmailTemplateProps {
  person: string;
  company: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  person, company, message,
}) => (
  <div>
    <h1>Portfolio Contact Form</h1>
    <p><strong>Name:</strong> ${person}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Message:</strong> ${message}</p>
  </div>
);