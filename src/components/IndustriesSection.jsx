import React, { useState } from 'react';
import { 
  Building, 
  Stethoscope, 
  Cpu, 
  ShoppingCart, 
  Store, 
  HardHat, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/websiteData';

const INDUSTRY_ICONS = {
  healthcare: Stethoscope,
  'tech-startups': Cpu,
  ecommerce: ShoppingCart,
  retail: Store,
  construction: HardHat,
  education: GraduationCap
};

export default function IndustriesSection({ onOpenConsultation }) {
  const [activeIndustryId, setActiveIndustryId] = useState(INDUSTRIES_SERVED[0].id);

  const activeIndustry = INDUSTRIES_SERVED.find(ind => ind.id === activeIndustryId) || INDUSTRIES_SERVED[0];
  const ActiveIcon = INDUSTRY_ICONS[activeIndustry.id] || Building;

  return (
    <section className="section" style={{ background: 'var(--bg-warm)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
            <Building size={13} />
            <span>Sector Specializations</span>
          </div>
          <h2 className="section-title">
            Tailored Industry Solutions for <span className="text-gradient-cyan">Every Vertical</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Taxation rules and software architecture vary dramatically by sector. We design customized compliance frameworks and digital ecosystems for your industry.
          </p>
        </div>

        {/* Sector Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="industries-grid"
        >
          {/* Left Column: Industry Selector List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {INDUSTRIES_SERVED.map((industry) => {
              const IconComponent = INDUSTRY_ICONS[industry.id] || Building;
              const isActive = activeIndustryId === industry.id;

              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustryId(industry.id)}
                  style={{
                    padding: '1.1rem 1.25rem',
                    borderRadius: '0.85rem',
                    background: isActive ? 'var(--bg-card)' : 'var(--bg-secondary)',
                    border: isActive 
                      ? '1.5px solid var(--teal-primary)' 
                      : '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive 
                      ? '0 8px 24px rgba(2, 132, 199, 0.15)' 
                      : 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '0.65rem',
                        background: isActive ? 'var(--teal-light)' : 'var(--bg-card)',
                        color: isActive ? 'var(--teal-primary)' : 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <div style={{ 
                        fontSize: '0.98rem', 
                        fontWeight: 700, 
                        color: isActive ? 'var(--teal-primary)' : 'var(--text-main)' 
                      }}>
                        {industry.name}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {industry.summary}
                      </div>
                    </div>
                  </div>

                  <ArrowRight 
                    size={16} 
                    style={{ 
                      color: isActive ? 'var(--teal-primary)' : 'transparent',
                      transform: isActive ? 'translateX(4px)' : 'none',
                      transition: 'all 0.2s ease',
                      flexShrink: 0
                    }} 
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Solution Display Card */}
          <div 
            className="glass-card industry-detail-card"
            style={{
              padding: '2.5rem',
              borderRadius: '1.25rem',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-card)',
              boxShadow: 'var(--shadow-card)',
              position: 'relative',
              width: '100%',
              maxWidth: '100%'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div 
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '0.85rem',
                  background: 'rgba(2, 132, 199, 0.12)',
                  border: '1px solid rgba(2, 132, 199, 0.3)',
                  color: 'var(--ocean-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <ActiveIcon size={28} />
              </div>
              <div>
                <span className="badge badge-cyan" style={{ marginBottom: '0.25rem' }}>
                  Industry Blueprint
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {activeIndustry.name}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: '0.96rem', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '1.75rem' }}>
              {activeIndustry.detail}
            </p>

            {/* Authentic Consultation photo preview */}
            <div 
              style={{
                borderRadius: '0.85rem',
                overflow: 'hidden',
                aspectRatio: '16/9',
                marginBottom: '1.75rem',
                border: '1px solid var(--border-subtle)',
                position: 'relative',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <img 
                src="/about-section.jpg" 
                alt="AHHS Corporate Client Consultation" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(10, 37, 64, 0.85) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.25rem'
                }}
              >
                <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>
                  Strategic 1-on-1 Partner Onboarding for {activeIndustry.name}
                </span>
              </div>
            </div>

            {/* Action */}
            <button
              onClick={onOpenConsultation}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.9rem 1.25rem', whiteSpace: 'normal', textAlign: 'center' }}
            >
              <span>Schedule {activeIndustry.name} Strategy Session</span>
              <ArrowRight size={17} style={{ flexShrink: 0 }} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .industries-grid {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
        }
        @media (max-width: 768px) {
          .industry-detail-card {
            padding: 1.5rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
