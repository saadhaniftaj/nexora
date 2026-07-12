import { NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }

    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
    // Re-format the private key if needed (sometimes env vars escape the newlines)
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
    const sheetId = process.env.GOOGLE_SHEET_ID

    if (!clientEmail || !privateKey || !sheetId) {
      console.error("Missing Google Sheets API credentials in .env.local")
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
    }

    // Authenticate with Google
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // Prepare the row data: [Timestamp, Name, Email, Phone, Message]
    const timestamp = new Date().toISOString()
    
    // Append the row to the 'Contact' tab
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Contact!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, name, email, phone || 'N/A', message]],
      },
    })

    return NextResponse.json({ success: true })

  } catch (error: any) {
    console.error('Contact submission error:', error)
    return NextResponse.json({ error: 'Failed to submit message' }, { status: 500 })
  }
}
