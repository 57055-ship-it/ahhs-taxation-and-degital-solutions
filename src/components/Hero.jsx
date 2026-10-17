import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Code2, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles, 
  TrendingUp, 
  Award,
  Lock,
  Zap,
  Globe2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export default function Hero({ onOpenConsultation, onSelectDivision }) {
  return (
    <section 
      id="hero" 
      style={{
        position: 'relative',
        paddingTop: '3.5rem',
        paddingBottom: '5.5rem',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-primary) 100%)'
      }}
    >
      {/* Ambient background glow strictly contained */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
          maxWidth: '100vw'
        }}
        aria-hidden="true"
      >
        <div 
          style={{
            position: 'absolute',
            top: '-15%',
            left: '10%',
            width: 'min(100vw, 550px)',
            height: 'min(100vw, 550px)',
            background: 'radial-gradient(circle, rgba(197, 155, 39, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: '15%',
            right: '-5%',
            width: 'min(100vw, 600px)',
            height: 'min(100vw, 600px)',
            background: 'radial-gradient(circle, rgba(2, 132, 199, 0.07) 0%, transparent 70%)',
            filter: 'blur(70px)'
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Headlines & Call to Action */}
          <div>
            {/* Pill Tag */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-gold)',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '1.5rem'
              }}
            >
              <div 
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--emerald-primary)',
                  boxShadow: '0 0 8px rgba(5, 150, 105, 0.5)'
                }}
              />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#8c6a12', letterSpacing: '0.02em' }}>
                FCCA (ACCA UK) & BSCS-LLB Corporate Leadership
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{
                fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
                color: 'var(--navy-primary)'
              }}
            >
              Where <span className="text-gradient-gold">Strategic Taxation</span> Meets{' '}
              <span className="text-gradient-cyan">Cutting-Edge Tech</span>.
            </h1>

            {/* Sub-headline */}
            <p 
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                lineHeight: 1.65,
                color: 'var(--text-body)',
                marginBottom: '2rem',
                maxWidth: '620px'
              }}
            >
              AHHS Taxation & Digital Solutions is your trusted global partner for high-stakes corporate tax filing, FBR & PRA compliance, SECP registrations, and enterprise software engineering. Eliminate regulatory penalties while expanding your digital ecosystem.
            </p>

            {/* Key Value Checklist */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.85rem',
                marginBottom: '2.5rem'
              }}
              className="hero-checklist"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--navy-primary)', fontSize: '0.92rem', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <span>Zero FBR Audit Penalties Guarantee</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--navy-primary)', fontSize: '0.92rem', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--teal-primary)', flexShrink: 0 }} />
                <span>SECP Fast-Track Incorporation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--navy-primary)', fontSize: '0.92rem', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--teal-primary)', flexShrink: 0 }} />
                <span>Custom Software & FBR POS Tier-1 Sync</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--navy-primary)', fontSize: '0.92rem', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <span>Cross-Border US/UK/PK Fiscal Structuring</span>
              </div>
            </div>

            {/* CTAs */}
            <div 
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}
              className="hero-cta-group"
            >
              <button
                onClick={onOpenConsultation}
                className="btn btn-primary"
                style={{
                  padding: '0.9rem 1.8rem',
                  fontSize: '1rem'
                }}
              >
                <span>Book Private Consultation</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{
                  padding: '0.9rem 1.6rem',
                  fontSize: '1rem'
                }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Partner Line</span>
              </a>

              <a
                href="#calculator"
                className="btn btn-secondary"
                style={{
                  padding: '0.9rem 1.4rem',
                  fontSize: '0.95rem'
                }}
              >
                <Zap size={16} style={{ color: 'var(--gold-primary)' }} />
                <span>Instant Quote Estimator</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Executive Control Center Showcase Card */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '100%' }}>
            {/* Subtle glow border */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '1.25rem',
                background: 'linear-gradient(135deg, rgba(197, 155, 39, 0.15) 0%, rgba(2, 132, 199, 0.15) 100%)',
                filter: 'blur(15px)',
                opacity: 0.7,
                zIndex: 0
              }}
            />

            {/* Executive Card Container */}
            <div 
              className="glass-card hero-showcase-card"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '1.25rem',
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-card)',
                borderRadius: '1.25rem',
                boxShadow: 'var(--shadow-card-hover)',
                width: '100%',
                maxWidth: '100%'
              }}
            >
              {/* Header of preview card */}
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid #f1f5f9',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.5rem', fontFamily: 'monospace', fontWeight: 600 }}>
                    ahhs-terminal // fiscal_tech_os
                  </span>
                </div>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    background: 'var(--emerald-light)',
                    color: 'var(--emerald-primary)',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}
                >
                  <Lock size={12} />
                  <span>100% Encrypted</span>
                </div>
              </div>

              {/* 3D Fintech Visual Image */}
              <div 
                style={{
                  position: 'relative',
                  borderRadius: '0.85rem',
                  overflow: 'hidden',
                  aspectRatio: '16/9',
                  background: '#0a192f',
                  boxShadow: '0 8px 25px rgba(10, 37, 64, 0.15)'
                }}
              >
                <img 
                  src="/hero-dashboard.jpg" 
                  alt="AHHS Financial & Technology Control Center" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                
                {/* Overlay status banner */}
                <div 
                  className="hero-status-banner"
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    right: '10px',
                    background: 'var(--nav-bg)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '0.65rem',
                    padding: '0.5rem 0.75rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <div 
                      style={{
                        padding: '0.3rem',
                        borderRadius: '0.35rem',
                        background: 'var(--gold-light)',
                        color: 'var(--gold-primary)',
                        display: 'flex'
                      }}
                    >
                      <ShieldCheck size={14} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--navy-primary)' }}>Active Taxpayer (ATL)</div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--emerald-primary)', fontWeight: 600 }}>Verified: In Good Standing</div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--teal-primary)' }}>Full-Stack Engine</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600 }}>React • Cloud • POS</div>
                  </div>
                </div>
              </div>

              {/* Division Controller Cards */}
              <div 
                style={{
                  marginTop: '1rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.75rem'
                }}
                className="hero-division-grid"
              >
                <div 
                  onClick={() => onSelectDivision('tax')}
                  style={{
                    padding: '0.75rem',
                    borderRadius: '0.65rem',
                    background: 'var(--gold-light)',
                    border: '1px solid var(--border-gold)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  className="interactive-mini-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                    <span style={{ fontSize: '1rem' }}>🏛️</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#8c6a12' }}>Tax & Legal Division</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-body)' }}>
                    Income Tax, Sales Tax PRA, SECP & Audits
                  </div>
                </div>

                <div 
                  onClick={() => onSelectDivision('digital')}
                  style={{
                    padding: '0.75rem',
                    borderRadius: '0.65rem',
                    background: 'var(--teal-light)',
                    border: '1px solid var(--border-teal)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  className="interactive-mini-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                    <span style={{ fontSize: '1rem' }}>💻</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--teal-dark)' }}>Digital & Tech Division</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-body)' }}>
                    Web Apps, Mobile Dev, ERP & SEO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Stats Counter Bar */}
        <div 
          className="glass-card hero-stats-card"
          style={{
            marginTop: '4.5rem',
            padding: '2rem 2.5rem',
            borderRadius: '1rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem'
            }}
            className="stats-grid"
          >
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div 
                key={stat.label}
                style={{
                  borderRight: idx !== 3 ? '1px solid var(--border-subtle)' : 'none',
                  paddingRight: idx !== 3 ? '1.5rem' : '0'
                }}
                className="stat-col"
              >
                <div 
                  style={{
                    fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: idx % 2 === 0 ? 'var(--navy-primary)' : 'var(--gold-primary)',
                    lineHeight: 1.1,
                    marginBottom: '0.35rem'
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.2rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .interactive-mini-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.06);
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
          .stat-col {
            border-right: none !important;
            padding-right: 0 !important;
          }
        }
        @media (max-width: 768px) {
          .hero-checklist {
            grid-template-columns: 1fr !important;
          }
          .hero-stats-card {
            padding: 1.5rem 1rem !important;
            margin-top: 2.75rem !important;
          }
        }
        @media (max-width: 576px) {
          .hero-cta-group {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-cta-group .btn {
            width: 100% !important;
          }
          .hero-division-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .hero-showcase-card {
            padding: 0.85rem !important;
          }
          .hero-status-banner {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            right: auto !important;
            margin-top: 0.5rem !important;
            border-radius: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
