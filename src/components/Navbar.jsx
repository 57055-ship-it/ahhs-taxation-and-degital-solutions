import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Code2, 
  MessageCircle,
  ExternalLink,
  Sun,
  Moon
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export default function Navbar({ onOpenConsultation, theme = 'light', onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Quote Estimator', href: '#calculator' },
    { name: 'Compliance Matrix', href: '#compliance' },
    { name: 'Why AHHS', href: '#why-us' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="navbar-wrapper" style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>
      {/* Top Announcement Bar */}
      <div 
        style={{
          background: 'var(--topbar-bg)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '0.45rem 1.5rem',
          fontSize: '0.8rem',
          color: '#cbd5e1'
        }}
      >
        <div 
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}
        >
          {/* Left contact info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a 
              href={`tel:${COMPANY_INFO.phone1Raw}`} 
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#e2e8f0' }}
              className="top-link"
            >
              <Phone size={13} style={{ color: 'var(--gold-primary)' }} />
              <span>{COMPANY_INFO.phone1}</span>
            </a>
            <a 
              href="https://wa.me/18077999590" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#6ee7b7' }}
              className="top-link"
            >
              <MessageCircle size={13} />
              <span>{COMPANY_INFO.phone2} (WhatsApp)</span>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#94a3b8' }} className="hide-mobile">
              <MapPin size={13} style={{ color: 'var(--teal-primary)' }} />
              <span>PIA Society, Lahore</span>
            </div>
          </div>

          {/* Right badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#f5c469', fontSize: '0.75rem', fontWeight: 600 }}>
              <ShieldCheck size={13} /> FBR & SECP Registered
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }} className="hide-mobile">|</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#7dd3fc', fontSize: '0.75rem', fontWeight: 600 }} className="hide-mobile">
              <Code2 size={13} /> Full-Stack Digital Division
            </span>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <nav 
        style={{
          background: isScrolled ? 'var(--nav-scrolled-bg)' : 'var(--nav-bg)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid var(--border-medium)' : '1px solid var(--nav-border)',
          padding: '0.75rem 1.5rem',
          transition: 'all 0.3s ease',
          boxShadow: isScrolled ? '0 8px 25px -4px rgba(0, 0, 0, 0.09)' : '0 2px 10px rgba(0, 0, 0, 0.03)'
        }}
      >
        <div 
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          {/* Logo with clean styling */}
          <a 
            href="#hero" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              textDecoration: 'none'
            }}
          >
            <div 
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '0.65rem',
                overflow: 'hidden',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2px',
                boxShadow: '0 2px 10px rgba(10, 37, 64, 0.08)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <img 
                src="/icon.png" 
                alt="AHHS Logo Crest" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
                  AHHS
                </span>
                <span 
                  style={{ 
                    fontSize: '0.65rem', 
                    padding: '0.18rem 0.5rem', 
                    borderRadius: '4px', 
                    background: 'var(--gold-light)',
                    border: '1px solid var(--border-gold)',
                    color: 'var(--gold-dark)',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    whiteSpace: 'nowrap'
                  }}
                >
                  DUAL ADVANTAGE
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.04em', textTransform: 'uppercase', marginTop: '-2px', fontWeight: 600 }}>
                Taxation & Digital Solutions
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div 
            className="hide-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.4rem'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  padding: '0.4rem 0.2rem',
                  position: 'relative'
                }}
                className="nav-link-hover"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA, Theme Toggle & Mobile Menu Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Desktop Theme Switcher */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              className="theme-toggle-btn hide-mobile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 0.95rem',
                borderRadius: '9999px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-main)',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={15} style={{ color: '#f59e0b' }} />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={15} style={{ color: 'var(--gold-dark)' }} />
                  <span>Dark Mode</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenConsultation}
              className="btn btn-primary hide-mobile"
              style={{
                fontSize: '0.88rem',
                padding: '0.65rem 1.35rem',
                borderRadius: '0.55rem'
              }}
            >
              <span>Book Consultation</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Theme Quick Toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="mobile-toggle-btn"
              aria-label="Toggle theme"
              title="Toggle theme"
              style={{
                display: 'none',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-main)',
                padding: '0.55rem',
                borderRadius: '0.5rem',
                cursor: 'pointer'
              }}
            >
              {theme === 'dark' ? <Sun size={20} style={{ color: '#f59e0b' }} /> : <Moon size={20} style={{ color: 'var(--gold-dark)' }} />}
            </button>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label="Toggle navigation menu"
              style={{
                display: 'none',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-main)',
                padding: '0.55rem',
                borderRadius: '0.5rem',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div 
            style={{
              background: 'var(--bg-card)',
              borderTop: '1px solid var(--border-subtle)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)'
            }}
          >
            {/* Mobile Theme Preference Row */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '0.5rem 0 1rem 0', 
                borderBottom: '1px solid var(--border-subtle)' 
              }}
            >
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Theme Appearance
              </span>
              <button
                type="button"
                onClick={onToggleTheme}
                className="theme-toggle-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--text-main)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun size={15} style={{ color: '#f59e0b' }} />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={15} style={{ color: 'var(--gold-dark)' }} />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                {link.name}
              </a>
            ))}
            <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <span>Book Consultation</span>
                <ArrowRight size={16} />
              </button>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageCircle size={16} />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Global Navbar Hover Styles */}
      <style>{`
        .nav-link-hover {
          transition: color 0.2s ease;
        }
        .nav-link-hover:hover {
          color: var(--gold-primary) !important;
        }
        .top-link:hover {
          color: #ffffff !important;
          text-decoration: underline;
        }
        @media (max-width: 992px) {
          .hide-mobile {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
