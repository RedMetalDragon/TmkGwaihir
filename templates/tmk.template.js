const getEmailTemplate = (content) => {
  const currentYear = new Date().getFullYear();

  return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 0;
              padding: 0;
              color: #333;
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #ddd;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
              background-color: #007bff;
              padding: 10px;
              text-align: center;
              color: #fff;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .header i {
              font-size: 40px; /* Adjust size as needed */
            }
            .content {
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              padding: 10px;
              background-color: #f8f9fa;
              color: #555;
              font-size: 12px;
            }
            .footer p {
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <i class="fas fa-envelope"></i>
              <h1>TimeKeeper</h1>
            </div>
            <div class="content">
              ${content}
            </div>
            <div class="footer">
              <p>&copy; ${currentYear} TimeKeeper. All rights reserved.</p>
              <p>BGC, Taguig, Metro Manila, Philippines</p>
            </div>
          </div>
        </body>
      </html>
    `;
};

module.exports = { getEmailTemplate };
