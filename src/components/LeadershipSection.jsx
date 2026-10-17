import React from 'react';
import { 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Code2, 
  Scale, 
  Quote, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { LEADERSHIP_DATA, COMPANY_INFO } from '../data/websiteData';

export default function LeadershipSection({ onOpenConsultation }) {
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

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.25rem' }}>
                      {leader.name}
                    </h3>

                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-body)', marginBottom: '0.4rem' }}>
                      {leader.title}
                    </div>

                    <div style={{ fontSize: '0.84rem', color: isChairman ? 'var(--gold-dark)' : 'var(--ocean-primary)', fontWeight: 600, lineHeight: 1.4 }}>
                      {leader.specialization}
                    </div>
                  </div>
                </div>

                {/* Bio & Quote Body */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
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
            <Award size={19} style={{ color: 'var(--gold-primary)' }} />
            <span>Fellow Member of ACCA (United Kingdom)</span>
          </div>
          <span style={{ color: 'var(--border-medium)' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 700 }}>
            <Scale size={19} style={{ color: 'var(--teal-primary)' }} />
            <span>Lahore Tax Bar Association (LTBA) Advocates</span>
          </div>
          <span style={{ color: 'var(--border-medium)' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 700 }}>
            <Code2 size={19} style={{ color: '#10b981' }} />
            <span>Computer Science & Cyber Jurisprudence (BSCS • LLB)</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .leadership-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .leader-header-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
