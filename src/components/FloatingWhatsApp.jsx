import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div 
      className="floating-whatsapp-container"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.5rem'
      }}
    >
      {/* Floating Prompt Tooltip */}
      {showTooltip && (
        <div 
          className="floating-whatsapp-tooltip"
          style={{
            background: 'var(--bg-card)',
            border: '1.5px solid #25d366',
            borderRadius: '0.85rem',
            padding: '0.85rem 1.1rem',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            maxWidth: '290px',
            position: 'relative',
            animation: 'floatSoft 4s ease-in-out infinite'
          }}
        >
          <div 
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#25d366',
              boxShadow: '0 0 10px #25d366',
              flexShrink: 0
            }}
          />
          <div style={{ fontSize: '0.84rem', color: 'var(--text-main)', lineHeight: 1.4, fontWeight: 500 }}>
            <strong style={{ color: 'var(--text-main)', fontWeight: 800 }}>Need urgent tax filing?</strong> Chat directly with our advisory desk.
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '2px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={15} />
          </button>
        </div>
      )}

      {/* WhatsApp Floating Pill Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="floating-whatsapp-btn"
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: '#25d366',
          boxShadow: '0 6px 25px rgba(37, 211, 102, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          transition: 'all 0.25s ease',
          position: 'relative'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.7)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 25px rgba(37, 211, 102, 0.5)';
        }}
      >
        <MessageCircle size={28} />
      </a>

      <style>{`
        @media (max-width: 576px) {
          .floating-whatsapp-container {
            bottom: 16px !important;
            right: 16px !important;
          }
          .floating-whatsapp-tooltip {
            max-width: calc(100vw - 36px) !important;
            padding: 0.65rem 0.85rem !important;
            font-size: 0.8rem !important;
          }
          .floating-whatsapp-btn {
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}</style>
    </div>
  );
}
