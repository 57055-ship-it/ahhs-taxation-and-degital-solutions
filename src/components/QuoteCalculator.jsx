import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  MessageCircle,
  HelpCircle,
  FileCheck2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

const ENTITY_TYPES = [
  { id: 'salaried', name: 'Salaried Individual / Executive', icon: '👔', turnaround: '24 Hours' },
  { id: 'freelancer', name: 'Freelancer / IT Exporter', icon: '💻', turnaround: '24-48 Hours' },
  { id: 'sole_prop', name: 'Sole Proprietor / Trader', icon: '🏪', turnaround: '2-3 Days' },
  { id: 'company', name: 'Private Ltd / SMC (SECP)', icon: '🏢', turnaround: '3-5 Days' },
  { id: 'international', name: 'International / Cross-Border', icon: '🌐', turnaround: 'Custom Scope' }
];

const SERVICE_OPTIONS = [
  { id: 'income_tax', name: 'Annual Income Tax Return & Wealth Statement', division: 'tax', popular: true },
  { id: 'sales_tax', name: 'Monthly Sales Tax Return (FBR & PRA/SRB)', division: 'tax', popular: true },
  { id: 'secp_registration', name: 'SECP Company Formation & Incorporation', division: 'tax' },
  { id: 'ntn_profiling', name: 'NTN Registration & Active Taxpayer (ATL)', division: 'tax' },
  { id: 'audit_defense', name: 'FBR Audit Notice Defense & Legal Reply', division: 'tax' },
  { id: 'bookkeeping', name: 'Accounting, Balance Sheet & Financial Statements', division: 'tax' },
  { id: 'web_dev', name: 'Custom Web Application / Enterprise Portal', division: 'digital', popular: true },
  { id: 'mobile_app', name: 'Mobile Application (iOS & Android)', division: 'digital' },
  { id: 'erp_pos', name: 'Custom ERP & FBR POS Tier-1 Integration', division: 'digital' },
  { id: 'seo_marketing', name: 'SEO & Performance Lead Generation', division: 'digital' },
];

export default function QuoteCalculator({ onOpenConsultation }) {
  const [selectedEntity, setSelectedEntity] = useState(ENTITY_TYPES[0]);
  const [selectedServices, setSelectedServices] = useState([
    'income_tax',
    'sales_tax'
  ]);
  const [urgency, setUrgency] = useState('standard');

  const toggleService = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== serviceId));
      }
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  // Generate pre-filled WhatsApp message
  const serviceNames = selectedServices
    .map(id => SERVICE_OPTIONS.find(s => s.id === id)?.name)
    .filter(Boolean);

  const whatsappMessage = encodeURIComponent(
    `Hello AHHS Taxation & Digital Team,\n\nI used your online quote estimator with the following configuration:\n• Entity Type: ${selectedEntity.name}\n• Urgency: ${urgency.toUpperCase()}\n• Selected Services:\n  - ${serviceNames.join('\n  - ')}\n\nPlease provide me with a formal quotation and next steps.`
  );

  const directWhatsappUrl = `https://wa.me/923069813200?text=${whatsappMessage}`;

  return (
    <section 
      id="calculator" 
      className="section"
      style={{
        background: 'var(--bg-warm)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Calculator size={13} />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="section-title">
            Tailor Your <span className="text-gradient-gold">Tax & Digital Suite</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Select your business structure and requirements to receive an instant recommended roadmap, estimated timeline, and customized quotation directly from our partners.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 0.75fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="calculator-grid"
        >
          {/* Left: Interactive Selection Fields */}
          <div 
            className="glass-card calc-left-card" 
            style={{ 
              padding: '2.25rem', 
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '1.25rem',
              boxShadow: '0 10px 30px rgba(10, 37, 64, 0.05)',
              width: '100%',
              maxWidth: '100%'
            }}
          >
            {/* Step 1: Entity Structure */}
            <div style={{ marginBottom: '2.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <span 
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'var(--gold-primary)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    fontWeight: 700
                  }}
                >
                  1
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy-primary)' }}>
                  Choose Your Entity Structure
                </h3>
              </div>

              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                  gap: '0.75rem'
                }}
                className="calc-entity-grid"
              >
                {ENTITY_TYPES.map((entity) => {
                  const isSelected = selectedEntity.id === entity.id;
                  return (
                    <button
                      key={entity.id}
                      type="button"
                      onClick={() => setSelectedEntity(entity)}
                      style={{
                        padding: '0.9rem 1rem',
                        borderRadius: '0.75rem',
                        background: isSelected 
                          ? 'var(--gold-light)' 
                          : 'var(--bg-secondary)',
                        border: isSelected 
                          ? '1.5px solid var(--gold-primary)' 
                          : '1px solid var(--border-subtle)',
                        color: isSelected ? 'var(--navy-primary)' : 'var(--text-body)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        transition: 'all 0.2s ease',
                        boxShadow: isSelected ? '0 4px 12px rgba(197, 155, 39, 0.15)' : 'none'
                      }}
                    >
                      <span style={{ fontSize: '1.3rem' }}>{entity.icon}</span>
                      <div>
                        <div style={{ 
                          fontSize: '0.88rem', 
                          fontWeight: 700, 
                          color: isSelected ? 'var(--gold-dark)' : 'var(--navy-primary)' 
                        }}>
                          {entity.name}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Services */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span 
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'var(--ocean-primary)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.85rem',
                      fontWeight: 700
                    }}
                  >
                    2
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy-primary)' }}>
                    Select Services Needed
                  </h3>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>(Choose 1 or more)</span>
              </div>

              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                  gap: '0.75rem'
                }}
                className="calc-services-grid"
              >
                {SERVICE_OPTIONS.map((srv) => {
                  const isChecked = selectedServices.includes(srv.id);
                  const isTax = srv.division === 'tax';
                  return (
                    <div
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '0.65rem',
                        background: isChecked 
                          ? (isTax ? 'var(--gold-light)' : 'var(--teal-light)')
                          : 'var(--bg-card)',
                        border: isChecked 
                          ? (isTax ? '1.5px solid var(--gold-primary)' : '1.5px solid var(--teal-primary)')
                          : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                        transition: 'all 0.2s ease',
                        boxShadow: isChecked ? '0 2px 8px rgba(10, 37, 64, 0.05)' : 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <div 
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '4px',
                            border: isChecked ? 'none' : '1.5px solid var(--border-medium)',
                            background: isChecked ? (isTax ? 'var(--gold-primary)' : 'var(--teal-primary)') : 'transparent',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          {isChecked && <Check size={14} strokeWidth={3} />}
                        </div>
                        <span style={{ 
                          fontSize: '0.86rem', 
                          fontWeight: isChecked ? 600 : 500, 
                          color: isChecked ? 'var(--navy-primary)' : 'var(--text-body)' 
                        }}>
                          {srv.name}
                        </span>
                      </div>

                      {srv.popular && (
                        <span 
                          style={{
                            fontSize: '0.65rem',
                            padding: '0.15rem 0.45rem',
                            borderRadius: '4px',
                            background: 'rgba(197, 155, 39, 0.15)',
                            color: 'var(--gold-dark)',
                            fontWeight: 700,
                            flexShrink: 0
                          }}
                        >
                          POPULAR
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Real-time Calculation Summary Card */}
          <div 
            className="glass-card calc-right-card" 
            style={{
              padding: '2.25rem',
              borderRadius: '1.25rem',
              border: '1.5px solid rgba(197, 155, 39, 0.4)',
              background: 'linear-gradient(150deg, #0A2540 0%, #071D32 100%)',
              boxShadow: '0 20px 45px rgba(10, 37, 64, 0.18)',
              position: 'sticky',
              top: '100px',
              width: '100%',
              maxWidth: '100%'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <FileCheck2 size={20} style={{ color: 'var(--gold-primary)' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>Estimated Scope</h3>
            </div>

            {/* Entity Badge */}
            <div 
              style={{
                padding: '0.85rem',
                borderRadius: '0.65rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '1.25rem'
              }}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Target Entity
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--gold-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem', flexWrap: 'wrap' }}>
                <span>{selectedEntity.icon}</span>
                <span>{selectedEntity.name}</span>
              </div>
            </div>

            {/* Scope Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '0.6rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Selected Services:</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>{selectedServices.length} modules</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '0.6rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Estimated Turnaround:</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--cyan-primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={14} />
                  <span>{selectedEntity.turnaround}</span>
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '0.6rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Compliance Protection:</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <ShieldCheck size={14} />
                  <span>100% Guaranteed</span>
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Senior Partner Review:</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f7cb73' }}>
                  FCCA & LLB Included
                </span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}
              >
                <MessageCircle size={18} />
                <span>Get Instant Quote via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="btn btn-secondary"
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}
              >
                <span>Book Formal Case Consultation</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              🔒 No spam. Fast 1-on-1 partner review within business hours.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .calculator-grid {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
          .calc-right-card {
            position: static !important;
          }
        }
        @media (max-width: 768px) {
          .calc-left-card, .calc-right-card {
            padding: 1.5rem 1rem !important;
          }
          .calc-services-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .calc-entity-grid {
            grid-template-columns: 1fr !important;
          }
          .calc-left-card, .calc-right-card {
            padding: 1.25rem 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
}
