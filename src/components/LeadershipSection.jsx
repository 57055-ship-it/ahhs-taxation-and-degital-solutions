import React from 'react';
import { 
  Award, 
  Code2, 
  Scale, 
  Quote
} from 'lucide-react';
import { LEADERSHIP_DATA } from '../data/websiteData';

export default function LeadershipSection() {
  return (
    <section 
      id="leadership" 
      className="section"
    >
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Award size={13} />
            <span>Executive Board</span>
          </div>
          <h2 className="section-title">
            Leadership Powered by <span className="text-gradient-gold">Fiscal & Legal Mastery</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            At AHHS, our strategic direction is guided by qualified Fellows of Chartered Certified Accounting and legal-tech jurists with proven industry credentials.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
          className="leadership-grid"
        >
          {LEADERSHIP_DATA.map((leader, idx) => {
            const isChairman = idx === 0;

            return (
              <div
                key={leader.name}
                className="glass-card"
                style={{
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  border: isChairman 
                    ? '1.5px solid rgba(197, 155, 39, 0.4)' 
                    : '1.5px solid rgba(2, 132, 199, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--bg-card)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                {/* Photo & Identity Header */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '170px 1fr',
                    gap: '1.5rem',
                    padding: '2rem',
                    background: 'var(--bg-secondary)',
                    borderBottom: '1px solid var(--border-subtle)'
                  }}
                  className="leader-header-grid"
                >
                  {/* Photo Container */}
                  <div 
                    className="leader-photo-box"
                    style={{
                      width: '100%',
                      aspectRatio: '4/5',
                      borderRadius: '0.85rem',
                      overflow: 'hidden',
                      position: 'relative',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: '0 8px 20px rgba(10, 37, 64, 0.08)'
                    }}
                  >
                    <img 
                      src={leader.photo} 
                      alt={leader.name} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top'
                      }}
                    />
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${leader.name} on LinkedIn`}
                        title={`Connect with ${leader.name} on LinkedIn`}
                        className="photo-linkedin-badge"
                        style={{
                          position: 'absolute',
                          bottom: '8px',
                          right: '8px',
                          width: '28px',
                          height: '28px',
                          borderRadius: '6px',
                          background: '#0a66c2',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                          transition: 'all 0.2s ease',
                          zIndex: 2
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Leader Info */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '4px',
                        background: isChairman ? 'rgba(197, 155, 39, 0.12)' : 'rgba(2, 132, 199, 0.1)',
                        color: isChairman ? 'var(--gold-dark)' : 'var(--ocean-primary)',
                        marginBottom: '0.5rem',
                        width: 'fit-content'
                      }}
                    >
                      {leader.credentials}
                    </div>

                    <div 
                      className="leader-name-row"
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        marginBottom: '0.25rem' 
                      }}
                    >
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy-primary)', margin: 0 }}>
                        {leader.name}
                      </h3>
                      {leader.linkedin && (
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${leader.name} on LinkedIn`}
                          title={`Connect with ${leader.name} on LinkedIn`}
                          className="leader-linkedin-icon-link"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '26px',
                            height: '26px',
                            borderRadius: '6px',
                            background: 'rgba(10, 102, 194, 0.1)',
                            color: '#0a66c2',
                            transition: 'all 0.2s ease',
                            flexShrink: 0
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                    </div>

                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-body)', marginBottom: '0.4rem' }}>
                      {leader.title}
                    </div>

                    <div style={{ fontSize: '0.84rem', color: isChairman ? 'var(--gold-dark)' : 'var(--ocean-primary)', fontWeight: 600, lineHeight: 1.4 }}>
                      {leader.specialization}
                    </div>

                    {leader.linkedin && (
                      <div style={{ marginTop: '0.75rem' }}>
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Connect with ${leader.name} on LinkedIn`}
                          className="leader-linkedin-btn"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            padding: '0.35rem 0.75rem',
                            borderRadius: '0.5rem',
                            background: 'rgba(10, 102, 194, 0.08)',
                            color: '#0a66c2',
                            border: '1px solid rgba(10, 102, 194, 0.25)',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                            width: 'fit-content'
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                          <span>Connect on LinkedIn</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bio & Quote Body */}
                <div 
                  className="leader-card-body"
                  style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}
                >
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text-body)', marginBottom: '1.5rem' }}>
                    {leader.bio}
                  </p>

                  {/* Quote Callout */}
                  <div 
                    style={{
                      padding: '1.1rem 1.35rem',
                      borderRadius: '0.75rem',
                      background: '#f8fafc',
                      borderLeft: isChairman ? '3.5px solid var(--gold-primary)' : '3.5px solid var(--ocean-primary)',
                      position: 'relative'
                    }}
                  >
                    <Quote 
                      size={20} 
                      style={{
                        color: isChairman ? 'var(--gold-primary)' : 'var(--ocean-primary)',
                        opacity: 0.8,
                        marginBottom: '0.35rem'
                      }} 
                    />
                    <p style={{ fontSize: '0.88rem', fontStyle: 'italic', color: 'var(--navy-primary)', lineHeight: 1.55, fontWeight: 500 }}>
                      "{leader.quote}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Credentials & Memberships Ribbon */}
        <div 
          className="credentials-ribbon"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            padding: '1.5rem 2rem',
            borderRadius: '1rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 700 }}>
            <Award size={19} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
            <span>Fellow Member of ACCA (United Kingdom)</span>
          </div>
          <span className="ribbon-bullet" style={{ color: 'var(--border-medium)' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 700 }}>
            <Scale size={19} style={{ color: 'var(--teal-primary)', flexShrink: 0 }} />
            <span>Lahore Tax Bar Association (LTBA) Advocates</span>
          </div>
          <span className="ribbon-bullet" style={{ color: 'var(--border-medium)' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 700 }}>
            <Code2 size={19} style={{ color: '#10b981', flexShrink: 0 }} />
            <span>Computer Science & Cyber Jurisprudence (BSCS • LLB)</span>
          </div>
        </div>
      </div>

      <style>{`
        .photo-linkedin-badge:hover {
          transform: scale(1.12);
          background: #004182 !important;
        }
        .leader-linkedin-icon-link:hover {
          background: #0a66c2 !important;
          color: #ffffff !important;
          transform: translateY(-1px);
        }
        .leader-linkedin-btn:hover {
          background: #0a66c2 !important;
          color: #ffffff !important;
          border-color: #0a66c2 !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(10, 102, 194, 0.28) !important;
        }
        [data-theme="dark"] .leader-linkedin-btn {
          background: rgba(10, 102, 194, 0.22) !important;
          color: #38bdf8 !important;
          border-color: rgba(56, 189, 248, 0.35) !important;
        }
        [data-theme="dark"] .leader-linkedin-btn:hover {
          background: #0284c7 !important;
          color: #ffffff !important;
          border-color: #0284c7 !important;
        }
        [data-theme="dark"] .leader-linkedin-icon-link {
          background: rgba(10, 102, 194, 0.22) !important;
          color: #38bdf8 !important;
        }
        [data-theme="dark"] .leader-linkedin-icon-link:hover {
          background: #0284c7 !important;
          color: #ffffff !important;
        }
        @media (max-width: 992px) {
          .leadership-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .leader-header-grid {
            grid-template-columns: 1fr !important;
            padding: 1.25rem 1rem !important;
            text-align: center;
          }
          .leader-photo-box {
            max-width: 170px !important;
            margin: 0 auto 0.75rem auto !important;
          }
          .leader-name-row {
            justify-content: center !important;
          }
          .leader-header-grid > div:last-child {
            align-items: center !important;
          }
          .leader-card-body {
            padding: 1.25rem 1rem !important;
          }
          .credentials-ribbon {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1rem !important;
            padding: 1.25rem 1rem !important;
          }
          .ribbon-bullet {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
