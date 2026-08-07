import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, answers } = await request.json()

    if (!name || !email || !answers) {
      return NextResponse.json({ error: 'Ontbrekende velden' }, { status: 400 })
    }

    const questions = [
      'Hoe genereren jullie momenteel nieuwe klanten?',
      'Hoeveel tijd kost dat iedere week?',
      'Hoe vaak spreken jullie een bedrijf waarvan je denkt: "Hier willen we echt voor werken."',
      'Hebben jullie ervaring met externe leadgeneratie?',
      'Wat zou het voor jullie betekenen als Buddy onderdeel wordt van jullie team?',
    ]

    const answersHtml = questions
      .map((q, i) => `<tr><td style="padding:12px 16px;border-bottom:1px solid #eee;color:#666;font-weight:600;vertical-align:top;width:40%">${q}</td><td style="padding:12px 16px;border-bottom:1px solid #eee;color:#1B1B1B">${answers[i] || '—'}</td></tr>`)
      .join('')

    await resend.emails.send({
      from: 'Buddy Check <buddy@mybuddy.works>',
      to: ['giedo@gmgroup.nl'],
      replyTo: email,
      subject: `Buddy Check ingevuld door ${name}`,
      html: `
        <div style="font-family:system-ui,-apple-system,sans-serif;max-width:640px;margin:0 auto;color:#1B1B1B">
          <div style="background:#8C6239;padding:32px;border-radius:12px 12px 0 0">
            <h1 style="color:#F2EDE6;font-size:24px;margin:0">Nieuwe Buddy Check</h1>
            <p style="color:#E7E1D8;margin:8px 0 0;font-size:16px">${name} wil weten of Buddy bij hun past.</p>
          </div>
          <div style="background:#fff;padding:32px;border:1px solid #eee;border-top:none">
            <p style="margin:0 0 8px"><strong>Naam:</strong> ${name}</p>
            <p style="margin:0 0 24px"><strong>E-mail:</strong> <a href="mailto:${email}" style="color:#8C6239">${email}</a></p>
            <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.6">
              ${answersHtml}
            </table>
          </div>
          <div style="background:#F2EDE6;padding:20px 32px;border-radius:0 0 12px 12px;border:1px solid #eee;border-top:none">
            <p style="margin:0;font-size:14px;color:#666">Beantwoord door te replyen — gaat direct naar ${email}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Buddy Check email error:', error)
    return NextResponse.json({ error: 'Kon email niet versturen' }, { status: 500 })
  }
}
