import React from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Award,
  ArrowRight
} from 'lucide-react';
import { COMPARISON_DATA } from '../data/websiteData';

export default function WhyUsSection({ onOpenConsultation }) {
  return (
    <section id="why-us" className="section">
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Award size={13} />
            <span>The AHHS Difference</span>
          </div>
          <h2 className="section-title">
            Why Modern Enterprises Choose <span className="text-gradient-dual">AHHS</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            See how our integrated dual-division model dismantles the friction between isolated tax practitioners and fragmented software agencies.
          </p>
        </div>

        {/* Comparative Matrix Table */}
        <div 
          className="glass-card"
          style={{
            overflowX: 'auto',
            borderRadius: '1.25rem',
            border: '1px solid var(--border-subtle)',
            background: 'var(--bg-card)',
            boxShadow: 'var(--shadow-card)',
            padding: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          <table 
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: '750px',
              textAlign: 'left'
            }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-subtle)' }}>
                <th style={{ padding: '1rem', color: 'var(--text-main)', fontSize: '0.88rem', fontWeight: 800, width: '25%' }}>
                  CRITICAL DIMENSION
                </th>
                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 700, width: '25%' }}>
                  Traditional Accountants
                </th>
                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 700, width: '25%' }}>
                  Isolated Tech Agencies
                </th>
                <th 
                  style={{
                    padding: '1rem',
                    background: 'rgba(197, 155, 39, 0.12)',
                    borderRadius: '0.75rem 0.75rem 0 0',
                    color: 'var(--gold-dark)',
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    width: '25%',
                    borderTop: '2px solid var(--gold-primary)',
                    borderLeft: '2px solid var(--gold-primary)',
                    borderRight: '2px solid var(--gold-primary)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Sparkles size={16} style={{ color: 'var(--gold-dark)' }} />
                    <span>AHHS Dual Advantage</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, idx) => (
                <tr 
                  key={idx}
                  style={{
                    borderBottom: idx !== COMPARISON_DATA.length - 1 ? '1px solid var(--border-subtle)' : 'none'
                  }}
                >
                  {/* Metric Name */}
                  <td style={{ padding: '1.25rem 1rem', fontWeight: 800, color: 'var(--text-main)', fontSize: '0.92rem' }}>
                    {row.metric}
                  </td>

                  {/* Traditional Accountant */}
                  <td style={{ padding: '1.25rem 1rem', color: 'var(--text-body)', fontSize: '0.86rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <X size={16} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                      <span>{row.traditional}</span>
                    </div>
                  </td>

                  {/* Isolated Tech Agency */}
                  <td style={{ padding: '1.25rem 1rem', color: 'var(--text-body)', fontSize: '0.86rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <X size={16} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                      <span>{row.techAgency}</span>
                    </div>
                  </td>

                  {/* AHHS */}
                  <td 
                    style={{
                      padding: '1.25rem 1rem',
                      background: 'rgba(197, 155, 39, 0.08)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      borderLeft: '2px solid rgba(197, 155, 39, 0.3)',
                      borderRight: '2px solid rgba(197, 155, 39, 0.3)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <Check size={17} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} strokeWidth={3} />
                      <span style={{ color: 'var(--text-main)' }}>{row.ahhs}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-3">
          <div 
            className="glass-card"
            style={{
              padding: '2.25rem',
              borderRadius: '1.25rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderTop: '4px solid var(--gold-primary)',
              boxShadow: '0 8px 24px rgba(10, 37, 64, 0.05)'
            }}
          >
            <div 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '0.75rem',
                background: 'rgba(197, 155, 39, 0.12)',
                color: 'var(--gold-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}
            >
              <ShieldCheck size={26} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem', color: 'var(--navy-primary)' }}>
              FBR & SECP Sovereign Safety
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-body)' }}>
              Led by an FCCA (UK) fellow and Lahore Tax Bar Association advocate, our filings undergo rigorous multi-tier audit scrutiny before formal submission.
            </p>
          </div>

          <div 
            className="glass-card"
            style={{
              padding: '2.25rem',
              borderRadius: '1.25rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderTop: '4px solid var(--teal-primary)',
              boxShadow: '0 8px 24px rgba(10, 37, 64, 0.05)'
            }}
          >
            <div 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '0.75rem',
                background: 'rgba(2, 132, 199, 0.12)',
                color: 'var(--ocean-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}
            >
              <Cpu size={26} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem', color: 'var(--navy-primary)' }}>
              Full-Stack Digital Engineering
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-body)' }}>
              From custom React platforms to FBR Tier-1 POS digital invoicing integrations, our software division designs ultra-scalable cloud architectures.
            </p>
          </div>

          <div 
            className="glass-card"
            style={{
              padding: '2.25rem',
              borderRadius: '1.25rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderTop: '4px solid #10b981',
              boxShadow: '0 8px 24px rgba(10, 37, 64, 0.05)'
            }}
          >
            <div 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '0.75rem',
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}
            >
              <Zap size={26} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem', color: 'var(--navy-primary)' }}>
              Rapid Turnaround & Direct Access
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-body)' }}>
              Direct partner accessibility via dedicated WhatsApp hotline and priority e-filing turnarounds of 24–48 hours for urgent Active Taxpayer activations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
