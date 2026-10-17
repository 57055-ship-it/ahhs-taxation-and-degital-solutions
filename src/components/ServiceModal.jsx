import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Package, 
  ArrowRight, 
  MessageCircle,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export default function ServiceModal({ service, onClose, onBookConsultation }) {
  if (!service) return null;

  const isTax = service.division === 'tax';
  const whatsappUrl = `https://wa.me/923069813200?text=${encodeURIComponent(
    `Hello AHHS Team, I am interested in your service: ${service.title}. Please provide me with details on onboarding and documents required.`
  )}`;

  return (
    <div 
      className="modal-backdrop-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(10, 37, 64, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div 
        className="glass-card service-modal-card"
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--modal-bg)',
          border: isTax ? '1.5px solid var(--gold-primary)' : '1.5px solid var(--teal-primary)',
          borderRadius: '1.25rem',
          padding: '2.25rem',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-medium)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '1.5rem', paddingRight: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <span className={`badge ${isTax ? 'badge-gold' : 'badge-cyan'}`}>
              {isTax ? '🏛️ Taxation & Financial Advisory' : '💻 Digital Solutions & Software'}
            </span>
            <span 
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                background: isTax ? 'rgba(197, 155, 39, 0.12)' : 'rgba(2, 132, 199, 0.1)',
                color: isTax ? 'var(--gold-dark)' : 'var(--ocean-primary)'
              }}
            >
              {service.badge}
            </span>
          </div>

          <h3 style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.75rem)', fontWeight: 800, color: 'var(--text-main)' }}>
            {service.title}
          </h3>
        </div>

        {/* Overview paragraph */}
        <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-body)', marginBottom: '1.5rem' }}>
          {service.description}
        </p>

        {/* Timeline & Deliverables Box */}
        <div 
          className="service-meta-box"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            padding: '1.25rem',
            borderRadius: '0.75rem',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '1.75rem'
          }}
        >
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              color: isTax ? 'var(--gold-dark)' : 'var(--teal-primary)', 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '0.04em', 
              marginBottom: '0.25rem' 
            }}>
              <Clock size={15} />
              <span>Standard Timeline</span>
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
              {service.timeline}
            </div>
          </div>

          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              color: '#059669', 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '0.04em', 
              marginBottom: '0.25rem' 
            }}>
              <Package size={15} />
              <span>Key Deliverables</span>
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-body)', fontWeight: 500 }}>
              {service.deliverables}
            </div>
          </div>
        </div>

        {/* Feature Checklist */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.85rem' }}>
            Detailed Scope & Execution Coverage
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {service.features.map((feature, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <CheckCircle2 
                  size={18} 
                  style={{ color: isTax ? 'var(--gold-primary)' : 'var(--ocean-primary)', flexShrink: 0, marginTop: '2px' }} 
                />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-body)' }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div 
          className="service-modal-actions"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%', padding: '0.85rem' }}
          >
            <MessageCircle size={17} />
            <span>Inquire on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onBookConsultation(service);
            }}
            className={`btn ${isTax ? 'btn-primary' : 'btn-cyan'}`}
            style={{ width: '100%', padding: '0.85rem' }}
          >
            <span>Book Consultation</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 576px) {
          .modal-backdrop-overlay {
            padding: 0.75rem !important;
          }
          .service-modal-card {
            padding: 1.35rem 1rem !important;
          }
          .service-meta-box {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .service-modal-actions {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
