import React, { useState } from 'react';
import { 
  Calculator, 
  FileSpreadsheet, 
  Building2, 
  ShieldCheck, 
  Scale, 
  Receipt, 
  Award, 
  BadgeDollarSign, 
  Globe, 
  Smartphone, 
  Code2, 
  TrendingUp, 
  Search, 
  Sparkles, 
  Database,
  ArrowRight,
  CheckCircle2,
  Clock,
  Filter,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/websiteData';

// Icon mapper helper
const ICON_MAP = {
  Calculator,
  FileSpreadsheet,
  Building2,
  ShieldCheck,
  Scale,
  Receipt,
  Award,
  BadgeDollarSign,
  Globe,
  Smartphone,
  Code2,
  TrendingUp,
  Search,
  Sparkles,
  Database
};

export default function ServicesSection({ onSelectService, activeDivision, onChangeDivision }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesDivision = activeDivision === 'all' || service.division === activeDivision;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDivision && matchesSearch;
  });

  return (
    <section id="services" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={13} />
            <span>Dual Capabilities Matrix</span>
          </div>
          <h2 className="section-title">
            Comprehensive <span className="text-gradient-gold">Tax & Financial</span> +{' '}
            <span className="text-gradient-cyan">Digital Engineering</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Explore our specialized corporate divisions. Each service is engineered to guarantee 100% regulatory compliance, optimal fiscal efficiency, and robust digital scalability.
          </p>
        </div>

        {/* Division Filter & Search Bar Controls */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            marginBottom: '2.5rem',
            padding: '0.85rem 1.25rem',
            borderRadius: '1rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          {/* Division Switcher Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onChangeDivision('all')}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '0.55rem',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: activeDivision === 'all' ? '1px solid var(--border-gold)' : '1px solid transparent',
                background: activeDivision === 'all' ? 'var(--gold-primary)' : 'var(--bg-secondary)',
                color: activeDivision === 'all' ? '#ffffff' : 'var(--text-body)',
                transition: 'all 0.2s ease',
                boxShadow: activeDivision === 'all' ? '0 4px 12px var(--gold-glow)' : 'none'
              }}
            >
              All Services ({SERVICES_DATA.length})
            </button>

            <button
              onClick={() => onChangeDivision('tax')}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '0.55rem',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: activeDivision === 'tax' ? '1.5px solid var(--gold-primary)' : '1px solid transparent',
                background: activeDivision === 'tax' ? 'var(--gold-light)' : 'var(--bg-secondary)',
                color: activeDivision === 'tax' ? 'var(--gold-dark)' : 'var(--text-body)',
                transition: 'all 0.2s ease',
                boxShadow: activeDivision === 'tax' ? '0 4px 12px var(--gold-glow)' : 'none'
              }}
            >
              🏛️ Taxation & Finance (8)
            </button>

            <button
              onClick={() => onChangeDivision('digital')}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '0.55rem',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: activeDivision === 'digital' ? '1.5px solid var(--teal-primary)' : '1px solid transparent',
                background: activeDivision === 'digital' ? 'var(--teal-light)' : 'var(--bg-secondary)',
                color: activeDivision === 'digital' ? 'var(--teal-primary)' : 'var(--text-body)',
                transition: 'all 0.2s ease',
                boxShadow: activeDivision === 'digital' ? '0 4px 12px rgba(2, 132, 199, 0.18)' : 'none'
              }}
            >
              💻 Digital & Tech (8)
            </button>
          </div>

          {/* Search Input Filter */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#f8fafc',
              border: '1px solid #cbd5e1',
              borderRadius: '0.55rem',
              padding: '0.55rem 0.95rem',
              width: '100%',
              maxWidth: '300px'
            }}
          >
            <Search size={16} style={{ color: 'var(--text-muted)' }} />
            <input 
              type="text"
              placeholder="Search services (e.g. FBR, SECP, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--navy-primary)',
                fontSize: '0.86rem',
                width: '100%',
                fontWeight: 500
              }}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || ShieldCheck;
            const isTax = service.division === 'tax';

            return (
              <div
                key={service.id}
                className={`glass-card ${isTax ? 'glass-card-gold-hover' : 'glass-card-cyan-hover'}`}
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '1.25rem',
                  position: 'relative',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div>
                  {/* Card Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div 
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '0.75rem',
                        background: isTax ? 'rgba(197, 155, 39, 0.12)' : 'rgba(2, 132, 199, 0.1)',
                        border: isTax ? '1px solid rgba(197, 155, 39, 0.3)' : '1px solid rgba(2, 132, 199, 0.25)',
                        color: isTax ? 'var(--gold-dark)' : 'var(--ocean-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComponent size={25} />
                    </div>

                    <span 
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.6rem',
                        borderRadius: '9999px',
                        background: isTax ? 'rgba(197, 155, 39, 0.12)' : 'rgba(2, 132, 199, 0.1)',
                        color: isTax ? 'var(--gold-dark)' : 'var(--ocean-primary)',
                        border: isTax ? '1px solid rgba(197, 155, 39, 0.25)' : '1px solid rgba(2, 132, 199, 0.25)'
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.65rem', color: 'var(--navy-primary)' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-body)', marginBottom: '1.4rem' }}>
                    {service.summary}
                  </p>

                  {/* Feature Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div 
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: isTax ? 'var(--gold-primary)' : 'var(--ocean-primary)',
                            flexShrink: 0
                          }}
                        />
                        <span style={{ fontSize: '0.84rem', color: 'var(--text-body)', fontWeight: 500 }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Timeline and Action button */}
                <div style={{ paddingTop: '1.1rem', borderTop: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <Clock size={14} style={{ color: isTax ? 'var(--gold-primary)' : 'var(--ocean-primary)' }} />
                      <span>{service.timeline}</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700 }}>
                      ✓ Guaranteed
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service)}
                    style={{
                      width: '100%',
                      padding: '0.7rem 1rem',
                      borderRadius: '0.6rem',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = isTax ? 'var(--gold-light)' : 'var(--teal-light)';
                      e.currentTarget.style.borderColor = isTax ? 'var(--gold-primary)' : 'var(--teal-primary)';
                      e.currentTarget.style.color = isTax ? 'var(--gold-dark)' : 'var(--teal-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bg-secondary)';
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.color = 'var(--text-main)';
                    }}
                  >
                    <span>View Scope & Methodology</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div 
            style={{
              textAlign: 'center',
              padding: '4rem 1rem',
              color: 'var(--text-dim)',
              fontSize: '1rem'
            }}
          >
            No services matched "{searchQuery}". Try searching for another term like "Tax", "SECP", "Web", or "Audit".
          </div>
        )}
      </div>
    </section>
  );
}
