import React, { useState } from 'react';
import { 
  X, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  ShieldCheck,
  User,
  Mail,
  Phone
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/websiteData';

export default function ConsultationModal({ isOpen, onClose, preselectedService }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService ? preselectedService.title : SERVICES_DATA[0].title,
    entity: 'Private Limited Company (SECP)',
    date: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello AHHS Partner Desk,\n\nI want to schedule a consultation with the following details:\n• Name: ${formData.name || 'Client'}\n• Phone: ${formData.phone || 'Provided via WhatsApp'}\n• Service: ${formData.service}\n• Entity: ${formData.entity}\n• Preferred Date: ${formData.date || 'Earliest Available'}\n• Notes: ${formData.notes || 'None'}\n\nPlease confirm partner availability.`
  );

  const directWhatsappUrl = `https://wa.me/923069813200?text=${whatsappMessage}`;

  return (
    <div 
      className="modal-backdrop-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2500,
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
        className="glass-card consultation-modal-card"
        style={{
          width: '100%',
          maxWidth: '580px',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: 'var(--modal-bg)',
          border: '1.5px solid var(--gold-primary)',
          borderRadius: '1.25rem',
          padding: '2.25rem',
          position: 'relative',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.35)'
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

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div 
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto'
              }}
            >
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>
              Consultation Scheduled!
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: 'var(--navy-primary)' }}>{formData.name}</strong>. Our partner desk has been notified. You can also connect immediately on WhatsApp to confirm the fastest slot.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageCircle size={17} />
                <span>Confirm on WhatsApp Instantly</span>
              </a>
              <button
                onClick={onClose}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>
                <Calendar size={13} />
                <span>Partner Priority Desk</span>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--navy-primary)' }}>
                Book Private Consultation
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-body)', marginTop: '0.2rem' }}>
                Select your service requirements to connect with our qualified accountants and digital architects.
              </p>
            </div>

            {/* Name */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.3rem' }}>
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Hassan Shahzad"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.95rem',
                  borderRadius: '0.55rem',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  color: 'var(--navy-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  fontWeight: 500
                }}
              />
            </div>

            {/* Email & Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }} className="modal-row">
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.3rem' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@business.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '0.55rem',
                    background: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    color: 'var(--navy-primary)',
                    fontSize: '0.88rem',
                    outline: 'none',
                    fontWeight: 500
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.3rem' }}>
                  WhatsApp / Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+92 300..."
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '0.55rem',
                    background: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    color: 'var(--navy-primary)',
                    fontSize: '0.88rem',
                    outline: 'none',
                    fontWeight: 500
                  }}
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.3rem' }}>
                Service Area Required
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.95rem',
                  borderRadius: '0.55rem',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  color: 'var(--navy-primary)',
                  fontSize: '0.88rem',
                  outline: 'none',
                  fontWeight: 500
                }}
              >
                {SERVICES_DATA.map(s => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>

            {/* Entity Selection */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.3rem' }}>
                Business Structure
              </label>
              <select
                name="entity"
                value={formData.entity}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.95rem',
                  borderRadius: '0.55rem',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  color: 'var(--navy-primary)',
                  fontSize: '0.88rem',
                  outline: 'none',
                  fontWeight: 500
                }}
              >
                <option value="Private Limited Company (SECP)">Private Limited Company (SECP)</option>
                <option value="Single Member Company (SMC)">Single Member Company (SMC)</option>
                <option value="Association of Persons (AOP)">Association of Persons (AOP)</option>
                <option value="Sole Proprietorship">Sole Proprietorship</option>
                <option value="Salaried Individual">Salaried Individual</option>
                <option value="Freelancer / Exporter">Freelancer / IT Exporter</option>
                <option value="Cross-Border Enterprise">Cross-Border Enterprise</option>
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.3rem' }}>
                Preferred Consultation Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.95rem',
                  borderRadius: '0.55rem',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  color: 'var(--navy-primary)',
                  fontSize: '0.88rem',
                  outline: 'none',
                  fontWeight: 500
                }}
              />
            </div>

            {/* Notes */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.3rem' }}>
                Brief Case Notes
              </label>
              <textarea
                name="notes"
                rows={2}
                placeholder="Mention any statutory deadlines or notices received..."
                value={formData.notes}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.95rem',
                  borderRadius: '0.55rem',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  color: 'var(--navy-primary)',
                  fontSize: '0.88rem',
                  outline: 'none',
                  resize: 'none',
                  fontWeight: 500
                }}
              />
            </div>

            {/* Submit buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.4rem' }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <Send size={16} />
                <span>Submit Consultation Request</span>
              </button>

              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <MessageCircle size={16} />
                <span>Direct WhatsApp Fast Confirmation</span>
              </a>
            </div>

            <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              🔒 Confidential partner review under attorney-client privilege.
            </div>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 576px) {
          .modal-backdrop-overlay {
            padding: 0.75rem !important;
          }
          .consultation-modal-card {
            padding: 1.35rem 1rem !important;
          }
          .modal-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
