const express = require("express");
const app = express();

const landingInfo = {
  fullName: "Dexter G. Zapico",
  section: "BSIT BA - 4101",
  quote: "You have to be able to accept failure to get better."
};

app.get("/", (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Landing Page</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(to bottom right, #6a11cb, #2575fc);
          color: white;
          text-align: center;
          padding-top: 80px;
        }
        .container {
          background: rgba(255,255,255,0.15);
          padding: 40px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          width: 60%;
          margin: auto;
        }
        h1, h2 { margin-bottom: 10px; }
        p { font-size: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome!</h1>
        <h2>${landingInfo.fullName}</h2>
        <p><strong>Class Section:</strong> ${landingInfo.section}</p>
        <hr style="border: 0; height: 2px; background: white; width: 60%; margin: 25px auto;">
        <p><em>"${landingInfo.quote}"</em></p>
      </div>
    </body>
    </html>
  `;

  res.send(html);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
