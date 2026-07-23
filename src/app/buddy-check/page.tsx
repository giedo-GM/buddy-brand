'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const steps = [
  {
    question: 'Hoe genereren jullie momenteel nieuwe klanten?',
    type: 'text' as const,
  },
  {
    question: 'Hoeveel tijd kost dat iedere week?',
    type: 'text' as const,
  },
  {
    question: 'Hoe vaak spreken jullie een bedrijf waarvan je denkt:\n"Hier willen we echt voor werken."',
    type: 'text' as const,
  },
  {
    question: 'Hebben jullie ervaring met externe leadgeneratie?',
    type: 'choice' as const,
    options: ['Ja', 'Nee', 'Een beetje'],
  },
  {
    question: 'Wat zou het voor jullie betekenen als Buddy onderdeel wordt van jullie team?',
    type: 'textarea' as const,
  },
]

export default function BuddyCheckPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(steps.length).fill(''))
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const totalSteps = steps.length + 1
  const isLastStep = currentStep === steps.length
  const progress = ((currentStep + 1) / totalSteps) * 100

  const canProceed = () => {
    if (isLastStep) return name.trim() !== '' && email.trim() !== ''
    return answers[currentStep]?.trim() !== ''
  }

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const updateAnswer = (value: string) => {
    const next = [...answers]
    next[currentStep] = value
    setAnswers(next)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-primary" style={{ paddingTop: 'clamp(100px, 10vw, 120px)', paddingBottom: 'clamp(60px, 8vw, 120px)' }}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16 xl:px-24">

          {/* Header */}
          <div className="text-center" style={{ marginBottom: 'clamp(40px, 6vw, 80px)' }}>
            <p
              className="uppercase"
              style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', color: '#8C6239' }}
            >
              MIJN OPDRACHTGEVERS
            </p>
            <h1
              className="text-text-primary mt-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: '1.05', letterSpacing: '-0.03em' }}
            >
              Buddy Check
            </h1>
            <p
              className="text-text-secondary mx-auto mt-6"
              style={{ fontSize: '20px', lineHeight: '1.7', maxWidth: '560px' }}
            >
              Ben ik de juiste commerci&#235;le collega voor jullie?
            </p>
          </div>

          {/* 3D Laptop */}
          <div className="flex justify-center">
            <div
              style={{
                perspective: '1200px',
                width: '100%',
                maxWidth: '860px',
              }}
            >
              {/* Laptop body */}
              <div
                style={{
                  transform: 'rotateX(4deg)',
                  transformOrigin: 'bottom center',
                }}
              >
                {/* Screen bezel */}
                <div
                  style={{
                    backgroundColor: '#1B1B1B',
                    borderRadius: 'clamp(10px, 2vw, 16px) clamp(10px, 2vw, 16px) 0 0',
                    padding: 'clamp(10px, 2vw, 16px) clamp(10px, 2vw, 16px) 0 clamp(10px, 2vw, 16px)',
                    boxShadow: '0 -8px 40px rgba(27,27,27,0.15), 0 -2px 12px rgba(27,27,27,0.08)',
                  }}
                >
                  {/* Camera dot */}
                  <div className="flex justify-center" style={{ marginBottom: '8px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#333' }} />
                  </div>

                  {/* Screen */}
                  <div
                    style={{
                      backgroundColor: '#F2EDE6',
                      borderRadius: '4px 4px 0 0',
                      minHeight: '480px',
                      padding: 'clamp(32px, 5vw, 56px)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {submitted ? (
                      /* Success state */
                      <div className="flex flex-col items-center justify-center text-center" style={{ minHeight: '380px' }}>
                        <div
                          style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            backgroundColor: '#8C6239',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '32px',
                          }}
                        >
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </div>

                        <h2
                          className="text-text-primary"
                          style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, lineHeight: '1.2' }}
                        >
                          Bedankt.
                        </h2>

                        <p
                          className="text-text-secondary mt-6"
                          style={{ fontSize: '17px', lineHeight: '1.8', maxWidth: '440px' }}
                        >
                          Ik ga jullie antwoorden rustig bekijken.
                        </p>

                        <p
                          className="text-text-secondary mt-4"
                          style={{ fontSize: '17px', lineHeight: '1.8', maxWidth: '440px' }}
                        >
                          Daarna stuur ik persoonlijk een e-mail met:
                        </p>

                        <ul className="text-left mt-6" style={{ maxWidth: '400px' }}>
                          {[
                            'mijn eerste indruk',
                            'waar ik kansen zie',
                            'welke bedrijven ik zou benaderen',
                            'hoe ik jullie commerciële aanpak zou opzetten',
                          ].map((item) => (
                            <li
                              key={item}
                              className="text-text-secondary flex items-start gap-3"
                              style={{ fontSize: '16px', lineHeight: '1.8' }}
                            >
                              <span className="text-accent mt-1">&bull;</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      /* Form steps */
                      <div>
                        {/* Progress bar */}
                        <div style={{ marginBottom: '40px' }}>
                          <div className="flex items-center justify-between" style={{ marginBottom: '8px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', color: '#8C6239' }}>
                              {isLastStep ? 'LAATSTE STAP' : `STAP ${currentStep + 1} VAN ${steps.length}`}
                            </span>
                          </div>
                          <div style={{ height: '2px', backgroundColor: 'rgba(27,27,27,0.08)', borderRadius: '1px' }}>
                            <div
                              style={{
                                height: '100%',
                                width: `${progress}%`,
                                backgroundColor: '#8C6239',
                                borderRadius: '1px',
                                transition: 'width 0.4s ease',
                              }}
                            />
                          </div>
                        </div>

                        {isLastStep ? (
                          /* Contact info step */
                          <div>
                            <h2
                              className="text-text-primary"
                              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, lineHeight: '1.3' }}
                            >
                              Waar mag ik mijn persoonlijke advies naartoe sturen?
                            </h2>

                            <div style={{ marginTop: '36px' }}>
                              <label className="block">
                                <span className="text-text-secondary" style={{ fontSize: '14px', fontWeight: 500 }}>Naam</span>
                                <input
                                  type="text"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  className="mt-2 w-full bg-transparent text-text-primary outline-none"
                                  style={{
                                    fontSize: '17px',
                                    padding: '12px 0',
                                    borderBottom: '1.5px solid rgba(27,27,27,0.15)',
                                    transition: 'border-color 0.2s',
                                  }}
                                  onFocus={(e) => e.currentTarget.style.borderBottomColor = '#8C6239'}
                                  onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(27,27,27,0.15)'}
                                />
                              </label>

                              <label className="block" style={{ marginTop: '28px' }}>
                                <span className="text-text-secondary" style={{ fontSize: '14px', fontWeight: 500 }}>E-mailadres</span>
                                <input
                                  type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="mt-2 w-full bg-transparent text-text-primary outline-none"
                                  style={{
                                    fontSize: '17px',
                                    padding: '12px 0',
                                    borderBottom: '1.5px solid rgba(27,27,27,0.15)',
                                    transition: 'border-color 0.2s',
                                  }}
                                  onFocus={(e) => e.currentTarget.style.borderBottomColor = '#8C6239'}
                                  onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(27,27,27,0.15)'}
                                />
                              </label>
                            </div>
                          </div>
                        ) : (
                          /* Question steps */
                          <div>
                            <h2
                              className="text-text-primary"
                              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, lineHeight: '1.3', whiteSpace: 'pre-line' }}
                            >
                              {steps[currentStep].question}
                            </h2>

                            <div style={{ marginTop: '36px' }}>
                              {steps[currentStep].type === 'choice' ? (
                                <div className="flex flex-col gap-3">
                                  {steps[currentStep].options?.map((option) => (
                                    <button
                                      key={option}
                                      onClick={() => updateAnswer(option)}
                                      className="text-left flex items-center gap-3 transition-colors"
                                      style={{
                                        padding: '14px 20px',
                                        borderRadius: '8px',
                                        border: `1.5px solid ${answers[currentStep] === option ? '#8C6239' : 'rgba(27,27,27,0.1)'}`,
                                        backgroundColor: answers[currentStep] === option ? 'rgba(140,98,57,0.06)' : 'transparent',
                                        fontSize: '17px',
                                        color: '#1B1B1B',
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: '18px',
                                          height: '18px',
                                          borderRadius: '50%',
                                          border: `2px solid ${answers[currentStep] === option ? '#8C6239' : 'rgba(27,27,27,0.2)'}`,
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          flexShrink: 0,
                                        }}
                                      >
                                        {answers[currentStep] === option && (
                                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#8C6239' }} />
                                        )}
                                      </div>
                                      {option}
                                    </button>
                                  ))}
                                </div>
                              ) : steps[currentStep].type === 'textarea' ? (
                                <textarea
                                  value={answers[currentStep]}
                                  onChange={(e) => updateAnswer(e.target.value)}
                                  rows={5}
                                  className="w-full bg-transparent text-text-primary outline-none resize-none"
                                  style={{
                                    fontSize: '17px',
                                    lineHeight: '1.7',
                                    padding: '12px 0',
                                    borderBottom: '1.5px solid rgba(27,27,27,0.15)',
                                  }}
                                  onFocus={(e) => e.currentTarget.style.borderBottomColor = '#8C6239'}
                                  onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(27,27,27,0.15)'}
                                  placeholder="Typ hier jullie antwoord..."
                                />
                              ) : (
                                <input
                                  type="text"
                                  value={answers[currentStep]}
                                  onChange={(e) => updateAnswer(e.target.value)}
                                  className="w-full bg-transparent text-text-primary outline-none"
                                  style={{
                                    fontSize: '17px',
                                    padding: '12px 0',
                                    borderBottom: '1.5px solid rgba(27,27,27,0.15)',
                                    transition: 'border-color 0.2s',
                                  }}
                                  onFocus={(e) => e.currentTarget.style.borderBottomColor = '#8C6239'}
                                  onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(27,27,27,0.15)'}
                                  placeholder="Typ hier jullie antwoord..."
                                  onKeyDown={(e) => { if (e.key === 'Enter' && canProceed()) handleNext() }}
                                />
                              )}
                            </div>
                          </div>
                        )}

                        {/* Navigation */}
                        <div className="flex items-center justify-between" style={{ marginTop: '48px' }}>
                          {currentStep > 0 ? (
                            <button
                              onClick={handleBack}
                              className="text-text-secondary hover:text-text-primary transition-colors"
                              style={{ fontSize: '15px', fontWeight: 500 }}
                            >
                              &larr; Vorige
                            </button>
                          ) : (
                            <div />
                          )}

                          {isLastStep ? (
                            <button
                              onClick={handleSubmit}
                              disabled={!canProceed()}
                              className="transition-all duration-200"
                              style={{
                                backgroundColor: canProceed() ? '#1B1B1B' : 'rgba(27,27,27,0.1)',
                                color: canProceed() ? '#F2EDE6' : 'rgba(27,27,27,0.3)',
                                padding: '12px 28px',
                                borderRadius: '999px',
                                fontSize: '15px',
                                fontWeight: 500,
                              }}
                            >
                              Verstuur mijn Buddy Check
                            </button>
                          ) : (
                            <button
                              onClick={handleNext}
                              disabled={!canProceed()}
                              className="transition-all duration-200"
                              style={{
                                backgroundColor: canProceed() ? '#1B1B1B' : 'rgba(27,27,27,0.1)',
                                color: canProceed() ? '#F2EDE6' : 'rgba(27,27,27,0.3)',
                                padding: '12px 28px',
                                borderRadius: '999px',
                                fontSize: '15px',
                                fontWeight: 500,
                              }}
                            >
                              Volgende &rarr;
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Laptop bottom / keyboard */}
                <div
                  style={{
                    backgroundColor: '#2A2A2A',
                    height: '18px',
                    borderRadius: '0 0 16px 16px',
                    position: 'relative',
                  }}
                >
                  {/* Trackpad hint */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '80px',
                      height: '4px',
                      borderRadius: '2px',
                      backgroundColor: 'rgba(255,255,255,0.06)',
                    }}
                  />
                </div>

                {/* Shadow/base */}
                <div
                  style={{
                    height: '6px',
                    background: 'linear-gradient(to bottom, rgba(27,27,27,0.08), transparent)',
                    borderRadius: '0 0 20px 20px',
                    marginLeft: '20px',
                    marginRight: '20px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
