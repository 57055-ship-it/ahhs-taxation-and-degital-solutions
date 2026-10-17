import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageCircle, 
  ArrowRight,
  ShieldQuestion
} from 'lucide-react';
import { FAQ_DATA, COMPANY_INFO } from '../data/websiteData';

export default function FaqSection({ onOpenConsultation }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section">
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <HelpCircle size={13} />
            <span>Clear Transparency</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Everything you need to know about our corporate tax filings, SECP registrations, audit defense, and digital software development.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div 
          style={{
            maxWidth: '850px',
            margin: '0 auto 3rem auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  borderRadius: '1rem',
                  border: isOpen 
                    ? '1.5px solid var(--gold-primary)' 
                    : '1px solid var(--border-subtle)',
                  background: isOpen 
                    ? 'var(--bg-card)' 
                    : 'var(--bg-secondary)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                  boxShadow: isOpen 
                    ? '0 8px 25px rgba(197, 155, 39, 0.12)' 
                    : '0 2px 6px rgba(10, 37, 64, 0.03)'
                }}
              >
                {/* Accordion Question Bar */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.6rem',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ 
                    fontSize: '1.05rem', 
                    fontWeight: 700, 
                    color: isOpen ? 'var(--gold-dark)' : 'var(--text-main)' 
                  }}>
                    {faq.question}
                  </span>
                  <div 
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen ? 'var(--gold-dark)' : 'var(--text-muted)',
                      flexShrink: 0
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {/* Accordion Answer Body */}
                {isOpen && (
                  <div 
                    style={{
                      padding: '0 1.6rem 1.6rem 1.6rem',
                      fontSize: '0.94rem',
                      lineHeight: 1.65,
                      color: 'var(--text-body)',
                      borderTop: '1px solid var(--border-light)',
                      paddingTop: '1rem'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div 
          style={{
            maxWidth: '650px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '1.75rem 2rem',
            borderRadius: '1rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.85rem' }}>
            Have a specific scenario or received an urgent FBR notice?
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ fontSize: '0.88rem', padding: '0.7rem 1.35rem' }}
            >
              <MessageCircle size={16} />
              <span>Ask Partner on WhatsApp</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="btn btn-secondary"
              style={{ fontSize: '0.88rem', padding: '0.7rem 1.35rem' }}
            >
              <span>Schedule Case Call</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
