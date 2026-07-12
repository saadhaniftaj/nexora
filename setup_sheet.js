const { google } = require('googleapis');
require('dotenv').config({ path: '.env.local' });

async function run() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive'
    ],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const drive = google.drive({ version: 'v3', auth });

  try {
    console.log("Creating spreadsheet...");
    const res = await sheets.spreadsheets.create({
      requestBody: {
        properties: { title: 'Nexora Waitlist' }
      }
    });
    
    const sheetId = res.data.spreadsheetId;
    console.log("Created Spreadsheet ID:", sheetId);
    console.log("Spreadsheet URL:", res.data.spreadsheetUrl);

    console.log("Sharing with info@nexorafitness.ca...");
    await drive.permissions.create({
      fileId: sheetId,
      requestBody: {
        type: 'user',
        role: 'writer',
        emailAddress: 'info@nexorafitness.ca'
      },
      fields: 'id',
    });
    console.log("Share successful!");
  } catch (err) {
    console.error("ERROR:", err.message);
  }
}
run();
