import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How is the money spent?",
    a: "General donations go directly to field operations. We raise administrative funds separately from programme funds and publish quarterly financial reports. Every donor can see exactly where their money went. That is not a promise — that is how we operate."
  },
  {
    q: "Who are the caregivers?",
    a: "Caregivers are local community members trained in home visits, personal care, first aid basics, companionship, and referral support. They are drawn from the communities they serve and receive a stipend, transport money, and a clear career path into county health roles."
  },
  {
    q: "Can I visit field operations?",
    a: "Yes. Visits are scheduled carefully to protect the privacy and dignity of beneficiaries while allowing supporters to understand the work. Contact us at obomocare@gmail.com to arrange a visit to our Kisii or Nyamira locations."
  },
  {
    q: "What areas do you serve?",
    a: "We operate in Kisii and Nyamira counties in the Gusii region of Kenya. Our programmes reach households across both counties, with a focus on remote and underserved villages where formal support systems have limited reach."
  },
  {
    q: "How can I donate supplies?",
    a: "We need food (maize flour, beans, cooking oil), sanitary towels, soap, clothing, and mobility aids. Drop-off points are available in Kisii and Nyamira. Contact us for the nearest collection point and current needs list."
  },
  {
    q: "Do you accept international funding?",
    a: "We have never taken international funding since our founding in 2020. All support comes from community fundraising, local churches, businesses, and individual donors. We are open to structured international partnerships that align with our values of dignity and transparency."
  },
  {
    q: "How do I volunteer?",
    a: "We train and deploy 40 caregivers across Kisii and Nyamira. If you are a trained caregiver, nurse, community health volunteer, or someone who just wants to help, reach out via our Get Involved page. Volunteers receive training, a stipend, and transport money."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="section" style={{ background: '#FFFFFF', paddingTop: '6rem' }}>
      <div className="container" style={{ maxWidth: '48rem' }}>
        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">FAQ</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ color: 'rgba(0,0,0,0.55)', maxWidth: '40ch', marginInline: 'auto', lineHeight: 1.7 }}>
            Clear answers about operations, donations, and volunteering.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  background: 'var(--surface-light)',
                  transition: 'border-color 200ms ease',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 'var(--space-6)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#0A0A1A',
                    fontSize: 'var(--text-base)',
                    fontWeight: 600,
                    textAlign: 'left',
                    gap: 'var(--space-4)',
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      flexShrink: 0,
                      color: 'var(--color-accent)',
                      transition: 'transform 300ms ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 400ms ease',
                  }}
                >
                  <p style={{
                    padding: '0 var(--space-6) var(--space-6)',
                    color: 'rgba(0,0,0,0.65)',
                    lineHeight: 1.7,
                    fontSize: 'var(--text-sm)',
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          marginTop: 'var(--space-16)',
          padding: 'var(--space-10)',
          background: 'var(--surface-light)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
          border: '1px solid rgba(0,0,0,0.06)',
        }}>
          <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>
            Still have questions?
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.6)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
            Reach out and we will get back to you within 48 hours.
          </p>
          <a href="mailto:obomocare@gmail.com" className="btn btn--accent">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};
