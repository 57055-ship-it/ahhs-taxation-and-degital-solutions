import React from 'react';
import { 
  Star, 
  Quote, 
  MessageSquare, 
  CheckCircle, 
  Building2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { TESTIMONIALS } from '../data/websiteData';

export default function TestimonialsSection({ onOpenConsultation }) {
  return (
    <section 
      id="reviews" 
      className="section"
      style={{
        background: 'var(--bg-warm)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={13} />
            <span>Client Success Stories</span>
          </div>
          <h2 className="section-title">
            Proven Results Across <span className="text-gradient-gold">Global Enterprises</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Hear directly from healthcare leaders, venture-backed founders, and enterprise operators who rely on AHHS for flawless tax compliance and digital supremacy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-3" style={{ marginBottom: '3.5rem' }}>
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderRadius: '1.25rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Division Badge & Stars */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.2rem' }}>
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={15} style={{ fill: '#C59B27', color: '#C59B27' }} />
                    ))}
                  </div>
                  <span 
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.6rem',
                      borderRadius: '4px',
                      background: 'rgba(197, 155, 39, 0.12)',
                      color: 'var(--gold-dark)'
                    }}
                  >
                    {t.division}
                  </span>
                </div>

                {/* Review Text */}
                <Quote size={24} style={{ color: 'rgba(10, 37, 64, 0.12)', marginBottom: '0.75rem' }} />
                <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text-body)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(10, 37, 64, 0.06)',
                      border: '1.5px solid var(--gold-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      color: 'var(--navy-primary)',
                      fontSize: '1rem'
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--navy-primary)' }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {t.role}, <span style={{ color: 'var(--ocean-primary)', fontWeight: 600 }}>{t.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Tech & Collaboration Showcase Strip */}
        <div 
          className="glass-card"
          style={{
            padding: '2rem 2.5rem',
            borderRadius: '1.25rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div 
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '0.75rem',
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <CheckCircle size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-primary)' }}>
                100% Audit Protection & Verified Filing Assurance
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Every corporate tax submission is supervised by an FCCA and LTBA Advocate.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem' }}
          >
            <span>Book Case Evaluation</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
