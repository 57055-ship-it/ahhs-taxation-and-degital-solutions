import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ShieldCheck, 
  Code2, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export default function Footer({ onOpenConsultation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        background: 'linear-gradient(180deg, #0A2540 0%, #06182A 100%)',
        borderTop: '3px solid var(--gold-primary)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand Info & Crest */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '0.65rem',
                  overflow: 'hidden',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2px'
                }}
              >
                <img 
                  src="/icon.png" 
                  alt="AHHS Crest" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#ffffff' }}>
                  AHHS
                </span>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Taxation & Digital Solutions
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              AHHS Taxation & Digital Solutions is a premier corporate advisory and software engineering firm. We protect businesses against regulatory vulnerabilities while delivering scalable, high-performance digital engines.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AHHS Facebook"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                className="social-hover"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AHHS LinkedIn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                className="social-hover"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AHHS Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                className="social-hover"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Taxation Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ color: 'var(--gold-primary)' }}>🏛️</span>
              <span>Taxation & Finance</span>
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0 }}>
              <li>
                <a href="#services" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-link">
                  Income Tax Return Filing
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-link">
                  Monthly Sales Tax (FBR & PRA)
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-link">
                  SECP Company Incorporation
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-link">
                  NTN Registration & ATL Status
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-link">
                  Audit Defense & Notice Replies
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-link">
                  Accounts & Balance Sheets
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-link">
                  Commercial Debt Recovery
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Digital Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ color: 'var(--cyan-primary)' }}>💻</span>
              <span>Digital & Tech</span>
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0 }}>
              <li>
                <a href="#services" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-link">
                  Enterprise Web Development
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-link">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-link">
                  Custom Software & ERPs
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-link">
                  FBR POS Tier-1 Integration
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-link">
                  SEO & High-Growth Marketing
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-link">
                  Google Play & Apple Accounts
                </a>
              </li>
              <li>
                <a href="#services" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-link">
                  Secure Cloud Databases
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Office */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }}>
              Head Office Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '3px' }} />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} style={{ color: 'var(--cyan-primary)', flexShrink: 0 }} />
                <a href={`tel:${COMPANY_INFO.phone1Raw}`} style={{ color: '#ffffff' }}>
                  {COMPANY_INFO.phone1}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageCircle size={15} style={{ color: '#25d366', flexShrink: 0 }} />
                <a href="https://wa.me/18077999590" target="_blank" rel="noopener noreferrer" style={{ color: '#34d399' }}>
                  {COMPANY_INFO.phone2} (WhatsApp)
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Mail size={15} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '3px' }} />
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'var(--text-muted)', wordBreak: 'break-all' }}>
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '1.25rem', padding: '0.65rem' }}
            >
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

        {/* Legal Disclaimer & Regulatory Standing */}
        <div 
          style={{
            padding: '1.25rem',
            borderRadius: '0.75rem',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            marginBottom: '2rem',
            fontSize: '0.78rem',
            color: 'var(--text-dim)',
            lineHeight: 1.6
          }}
        >
          <strong>Regulatory Compliance & Legal Notice:</strong> AHHS Taxation & Digital Solutions provides professional taxation, corporate secretarial, and software consulting services in full accordance with the Income Tax Ordinance 2001, Sales Tax Act 1990, SECP Companies Act 2017, and relevant provincial tax statutes (PRA, SRB, KPRA, BRA). We strictly adhere to the highest professional standards of the Lahore Tax Bar Association and ACCA Code of Ethics.
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div 
          className="footer-bottom-bar"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '1.5rem',
            fontSize: '0.8rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © {new Date().getFullYear()} AHHS Taxation & Digital Solutions. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              padding: '0.4rem 0.8rem',
              borderRadius: '0.4rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.78rem'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--gold-primary) !important;
          padding-left: 3px;
        }
        .social-hover:hover {
          background: var(--gold-primary) !important;
          color: #070c17 !important;
          transform: translateY(-2px);
        }
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            text-align: center !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
