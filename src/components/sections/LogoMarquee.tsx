'use client'

const niches = [
  'Software Development Agencies',
  'AI & Automation Bureaus',
  'Branding & Creative Studios',
  'Marketing & Performance Agencies',
  'Webdesign & Digital Agencies',
  'IT & Cloud Consultancies',
  'Microsoft Partners',
  'ERP Implementatiepartners',
  'CRM Implementatiepartners',
  'Cybersecurity Bedrijven',
  'Managed Service Providers (MSP)',
  'Data & BI Consultancies',
  'Engineering Bureaus',
  'Architectenbureaus',
  'Recruitment & Executive Search',
  'HR & People Consultancy',
  'Financieel Advieskantoren',
  'Accountantskantoren',
  'Juridische Dienstverlening',
  'Bedrijfsconsultancy',
  'Duurzaamheidsconsultancy',
  'Logistieke Dienstverleners',
  'Industrieel Machinebouw',
  'Productiebedrijven (B2B)',
  'Groothandels',
  'SaaS Bedrijven',
  'Scale-ups',
  'HealthTech Bedrijven',
  'MedTech Bedrijven',
  'FinTech Bedrijven',
  'PropTech Bedrijven',
  'Bouw & Installatiebedrijven',
  'Vastgoedadvies',
  'Opleidingsinstituten (B2B)',
  'Zakelijke Evenementenorganisaties',
  'Outsourcing & Nearshore Partners',
  'Telecom & Connectivity',
  'E-commerce Software Partners',
  'Innovation Studios',
  'Digital Transformation Consultancy',
]

export default function LogoMarquee() {
  const items = [...niches, ...niches, ...niches]

  return (
    <section id="mijn-opdrachtgevers" className="border-t border-border" style={{ paddingTop: 'clamp(5rem, 10vw, 8rem)', paddingBottom: 'clamp(5rem, 10vw, 8rem)' }}>
      <div className="w-full px-5 sm:px-6 mb-12 sm:mb-16 lg:mb-20 flex justify-center text-center">
        <h2
          className="text-text-primary font-extrabold"
          style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.75rem)', lineHeight: '1.1' }}
        >
          Hier kom ik het beste tot mijn recht
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: 'marquee 120s linear infinite',
            width: 'max-content',
          }}
        >
          {items.map((name, i) => (
            <span
              key={i}
              className="inline-flex items-center"
              style={{ fontSize: '15px', fontWeight: 500, letterSpacing: '0.08em', color: '#8C6239', marginLeft: '24px', marginRight: '24px' }}
            >
              {name}
              <span style={{ marginLeft: '48px', opacity: 0.35 }}>&middot;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
