import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, ShieldAlert } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section style={{ padding: '4rem 0', position: 'relative' }}>
      <div className="container">
        <div 
          className="glass-card"
          style={{
            padding: '3rem 2.75rem',
            borderRadius: '1.25rem',
            background: 'linear-gradient(135deg, #0A2540 0%, #071D32 100%)',
            border: '1.5px solid rgba(197, 155, 39, 0.45)',
            boxShadow: '0 20px 45px rgba(10, 37, 64, 0.16)',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="newsletter-grid"
        >
          {/* Left info */}
          <div>
            <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
              <Mail size={13} />
              <span>Executive Briefing</span>
            </div>
            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.65rem' }}>
              Stay Ahead of <span className="text-gradient-gold">FBR Regulatory Changes</span> & Digital Tech
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              Receive concise weekly fiscal alerts, statutory deadline reminders, tax-saving strategies, and digital engineering insights delivered directly to your inbox. No spam.
            </p>
          </div>

          {/* Right form */}
          <div>
            {subscribed ? (
              <div 
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(16, 185, 129, 0.2)',
                  border: '1.5px solid #10b981',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <CheckCircle2 size={24} style={{ color: '#34d399', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.98rem' }}>You're Subscribed!</div>
                  <div style={{ fontSize: '0.82rem', color: '#e2e8f0' }}>Check your inbox shortly for our latest corporate tax briefing.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your corporate email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      flex: 1,
                      minWidth: '220px',
                      padding: '0.85rem 1.15rem',
                      borderRadius: '0.55rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: '0.85rem 1.6rem', fontSize: '0.92rem' }}
                  >
                    <span>Subscribe</span>
                    <Send size={15} />
                  </button>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                  🔒 Unsubscribe at any time. We respect strict corporate confidentiality.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
