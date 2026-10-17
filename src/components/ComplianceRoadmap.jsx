import React, { useState } from 'react';
import { 
  Calendar, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Bell,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { COMPLIANCE_CALENDAR, COMPANY_INFO } from '../data/websiteData';

export default function ComplianceRoadmap({ onOpenConsultation }) {
  const [selectedAuthority, setSelectedAuthority] = useState('All');

  const authorities = ['All', 'Sales Tax', 'Income Tax', 'Corporate', 'SECP'];

  const filteredItems = COMPLIANCE_CALENDAR.filter(item => 
    selectedAuthority === 'All' || item.category === selectedAuthority
  );

  return (
    <section 
      id="compliance" 
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
          <div className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            <Calendar size={13} />
            <span>FBR & SECP Statutory Calendar</span>
          </div>
          <h2 className="section-title">
            Never Face a <span className="text-gradient-gold">Late Penalty</span> Again
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Statutory tax and corporate compliance deadlines in Pakistan and cross-border regimes are rigorous. Our automated compliance alerts and retained filing team keep your business 100% active.
          </p>
        </div>

        {/* Authority Filter Tabs */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap'
          }}
        >
          {authorities.map(auth => {
            const isSelected = selectedAuthority === auth;
            return (
              <button
                key={auth}
                onClick={() => setSelectedAuthority(auth)}
                style={{
                  padding: '0.55rem 1.35rem',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: isSelected 
                    ? '1px solid var(--border-gold)' 
                    : '1px solid var(--border-subtle)',
                  background: isSelected 
                    ? 'var(--gold-primary)' 
                    : 'var(--bg-card)',
                  color: isSelected ? '#ffffff' : 'var(--text-body)',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 12px var(--gold-glow)' : 'var(--shadow-sm)'
                }}
              >
                {auth}
              </button>
            );
          })}
        </div>

        {/* Roadmap Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          {filteredItems.map((item, idx) => {
            const isCritical = item.urgency === 'Critical';
            const isHigh = item.urgency === 'High';

            return (
              <div 
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.85rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderLeft: isCritical 
                    ? '4px solid #ef4444' 
                    : isHigh 
                    ? '4px solid var(--gold-primary)' 
                    : '4px solid var(--teal-primary)',
                  borderRadius: '1.25rem',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Top period header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--gold-dark)',
                        background: 'rgba(197, 155, 39, 0.12)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '0.4rem',
                        border: '1px solid rgba(197, 155, 39, 0.25)'
                      }}
                    >
                      <Clock size={13} />
                      <span>{item.period}</span>
                    </div>

                    <span 
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                        background: isCritical 
                          ? 'rgba(239, 68, 68, 0.12)' 
                          : isHigh 
                          ? 'rgba(245, 158, 11, 0.12)' 
                          : 'rgba(2, 132, 199, 0.1)',
                        color: isCritical 
                          ? '#dc2626' 
                          : isHigh 
                          ? '#b45309' 
                          : '#0284c7',
                        border: isCritical
                          ? '1px solid rgba(239, 68, 68, 0.3)'
                          : isHigh 
                          ? '1px solid rgba(245, 158, 11, 0.3)' 
                          : '1px solid rgba(2, 132, 199, 0.25)'
                      }}
                    >
                      {item.urgency.toUpperCase()} PRIORITY
                    </span>
                  </div>

                  {/* Title & Authority */}
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: 'var(--ocean-primary)', fontWeight: 700, marginBottom: '0.75rem' }}>
                    🏛️ {item.authority}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-body)' }}>
                    {item.description}
                  </p>
                </div>

                {/* Card Action */}
                <div style={{ marginTop: '1.4rem', paddingTop: '0.9rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Zero Audit Risk
                  </span>
                  <button
                    onClick={onOpenConsultation}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--gold-dark)',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <span>Assign AHHS Team</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Retainer Banner Callout */}
        <div 
          className="glass-card"
          style={{
            padding: '2.5rem',
            borderRadius: '1.25rem',
            background: 'linear-gradient(145deg, #0A2540 0%, #071D32 100%)',
            border: '1.5px solid rgba(197, 155, 39, 0.4)',
            boxShadow: '0 20px 45px rgba(10, 37, 64, 0.15)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <Bell size={20} style={{ color: 'var(--ocean-light)' }} />
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff' }}>
                Join the AHHS Continuous Compliance Retainer
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              Outsource your complete monthly sales tax, withholding tax, employee taxation, and corporate returns for a fixed monthly subscription. Zero surprise audits, 100% peace of mind.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={onOpenConsultation}
              className="btn btn-primary"
              style={{ padding: '0.85rem 1.6rem' }}
            >
              <span>Get Retainer Proposal</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
