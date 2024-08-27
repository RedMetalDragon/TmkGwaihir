# Email Notification Microservice using AWS SES

This microservice is built using Node.js and AWS SES (Simple Email Service) to send email notifications. It provides a simple REST API endpoint to send emails.

## Features

- Send email notifications using AWS SES.
- Configured with environment variables for security.

## Prerequisites

- Node.js and npm installed on your machine.
- AWS SES setup with a verified sender email.
- An AWS account with access to SES configured.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://your-repo-url.git
cd email-service
```

### 2. Install Dependencies

### To ensure consistency across versions of npm and Node.js, use the following command:
```bash
npm ci
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
PORT=3000
AWS_REGION=your-aws-region
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
SES_SENDER_EMAIL=your-verified-ses-email@example.com
```

Replace the values with your AWS credentials and SES verified email address.

### 4. Run the Microservice

- **To start the server**: 

  ```bash
  npm run start
  ```

- **To run the server in development mode with auto-reloading**:

  ```bash
  npm run dev
  ```

- **To format the code**:

  ```bash
  npm run format
  ```

### 5. Test the Email Endpoint

You can send a test email using `curl` or tools like [Postman](https://www.postman.com/).

#### Example using `curl`:

- **Test email**:

  ```bash
  curl -X POST http://localhost:3000/send-email   -H "Content-Type: application/json"   -d '{
    "to": "your.email@domain.com",
    "subject": "Your Temporary Password",
    "text": "Your temporary password is: 123456. Please use it to log in.",
    "html": "<p>Your temporary password is: <strong>123456</strong>. Please use it to log in.</p><p>If you did not request this password, please ignore this email.</p>"
  }'
  ```

### Notes

- Ensure that your SES sender email is verified in the SES console.
- For sandbox accounts, SES requires both sender and recipient emails to be verified.