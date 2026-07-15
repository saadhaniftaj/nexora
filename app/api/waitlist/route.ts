import { NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
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

    // Prepare the row data: [Date, Name, Email, Phone]
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Vancouver',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZoneName: 'short'
    })
    
    // Append the row to Sheet1
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, name, email, phone || 'N/A']],
      },
    })

    return NextResponse.json({ success: true })

  } catch (error: any) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json({ error: 'Failed to submit waitlist' }, { status: 500 })
  }
}
