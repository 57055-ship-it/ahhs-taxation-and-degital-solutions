import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/websiteData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    entityType: 'Private Limited Company (SECP)',
    serviceInterest: 'Income Tax Return Filing',
    meetingType: 'Virtual Zoom / Google Meet Call',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(COMPANY_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const formattedWhatsAppMsg = encodeURIComponent(
    `Hello AHHS Taxation & Digital Team,\n\nI would like to schedule a consultation with the following details:\n• Name: ${formData.name || 'Prospective Client'}\n• Phone: ${formData.phone || 'Provided via WhatsApp'}\n• Entity Type: ${formData.entityType}\n• Service Required: ${formData.serviceInterest}\n• Preferred Meeting: ${formData.meetingType}\n• Message / Requirements: ${formData.message || 'Consultation inquiry'}\n\nPlease let me know your available slots.`
  );

  const directWhatsAppUrl = `https://wa.me/923069813200?text=${formattedWhatsAppMsg}`;

  return (
    <section 
      id="contact" 
      className="section" 
      style={{ 
        position: 'relative',
        background: 'var(--bg-warm)',
        borderTop: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Phone size={13} />
            <span>Direct Partner Access</span>
          </div>
          <h2 className="section-title">
            Book Your <span className="text-gradient-gold">Strategic Consultation</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Speak directly with our FCCA tax consultants and BSCS-LLB software architects. Whether you need an urgent FBR filing or a bespoke digital platform, we are ready to assist.
          </p>
        </div>

        {/* Contact Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: '3rem',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left Column: Contact Cards & Office Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Primary Address Card */}
            <div 
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderRadius: '1.25rem',
                border: '1.5px solid rgba(197, 155, 39, 0.4)',
                background: 'var(--bg-card)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '0.75rem',
                    background: 'rgba(197, 155, 39, 0.12)',
                    color: 'var(--gold-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>Lahore Head Office</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Principal Tax & Software Hub</div>
                </div>
              </div>

              <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {COMPANY_INFO.address}
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={copyAddress}
                  style={{
                    padding: '0.55rem 1rem',
                    borderRadius: '0.55rem',
                    background: copiedAddress ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-secondary)',
                    border: copiedAddress ? '1.5px solid #10b981' : '1px solid var(--border-subtle)',
                    color: copiedAddress ? '#059669' : 'var(--text-main)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <CheckCircle2 size={15} />
                  <span>{copiedAddress ? 'Address Copied!' : 'Copy Address'}</span>
                </button>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.55rem 1rem',
                    borderRadius: '0.55rem',
                    background: 'rgba(2, 132, 199, 0.1)',
                    border: '1px solid rgba(2, 132, 199, 0.3)',
                    color: 'var(--ocean-primary)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <ExternalLink size={15} />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Numbers */}
            <div 
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderRadius: '1.25rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                Direct Hotlines & Operating Hours
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                <a 
                  href={`tel:${COMPANY_INFO.phone1Raw}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}
                >
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(197, 155, 39, 0.12)', color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={17} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Primary Phone Line (Pakistan)</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>{COMPANY_INFO.phone1}</div>
                  </div>
                </a>

                <a 
                  href="https://wa.me/18077999590"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}
                >
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.15)', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={17} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>International & WhatsApp Line</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#059669' }}>{COMPANY_INFO.phone2}</div>
                  </div>
                </a>

                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}
                >
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(2, 132, 199, 0.1)', color: 'var(--ocean-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={17} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Official Correspondence Email</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)', wordBreak: 'break-all' }}>{COMPANY_INFO.email}</div>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--bg-secondary)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={17} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Office Hours</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-body)' }}>{COMPANY_INFO.workingHours}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Case Booking Form */}
          <div 
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: '1.25rem',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-card)',
              boxShadow: 'var(--shadow-card-hover)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div 
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>
                  Consultation Request Received!
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', maxWidth: '450px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                  Thank you, <strong style={{ color: 'var(--navy-primary)' }}>{formData.name}</strong>. Your inquiry regarding <strong style={{ color: 'var(--gold-dark)' }}>{formData.serviceInterest}</strong> has been assigned to our partner desk. A formal response will be provided within business hours.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageCircle size={17} />
                    <span>Open Case on WhatsApp Instantly</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Calendar size={20} style={{ color: 'var(--gold-dark)' }} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy-primary)' }}>
                    Schedule Case Consultation
                  </h3>
                </div>

                {/* Name & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Tariq Mahmood"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '0.6rem',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        color: 'var(--navy-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        fontWeight: 500
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '0.6rem',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        color: 'var(--navy-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        fontWeight: 500
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '0.6rem',
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      color: 'var(--navy-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      fontWeight: 500
                    }}
                  />
                </div>

                {/* Entity & Service Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                      Entity Type
                    </label>
                    <select
                      name="entityType"
                      value={formData.entityType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '0.6rem',
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
                      <option value="Association of Persons (AOP)">Association of Persons (AOP / Partnership)</option>
                      <option value="Sole Proprietor / Small Business">Sole Proprietor / Small Business</option>
                      <option value="Salaried Individual / Executive">Salaried Individual / Executive</option>
                      <option value="Freelancer / IT Exporter">Freelancer / IT Exporter</option>
                      <option value="International Corporate Client">International Corporate Client</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                      Primary Service Needed
                    </label>
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '0.6rem',
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
                </div>

                {/* Meeting Preference */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                    Preferred Consultation Mode
                  </label>
                  <select
                    name="meetingType"
                    value={formData.meetingType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '0.6rem',
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      color: 'var(--navy-primary)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      fontWeight: 500
                    }}
                  >
                    <option value="Virtual Zoom / Google Meet Call">Virtual Zoom / Google Meet Video Conference</option>
                    <option value="In-Person at Lahore PIA Office">In-Person Meeting at Lahore Head Office</option>
                    <option value="Direct Partner Phone Call">Direct Partner Phone Call</option>
                    <option value="WhatsApp Business Discussion">WhatsApp Business Discussion</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                    Case Summary / Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="Briefly describe your requirements, timeline, or tax notice section..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '0.6rem',
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      color: 'var(--navy-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontWeight: 500
                    }}
                  />
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '0.5rem' }}>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: '0.85rem' }}
                  >
                    <Send size={16} />
                    <span>Submit Inquiry</span>
                  </button>

                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ padding: '0.85rem' }}
                  >
                    <MessageCircle size={16} />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>

                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.25rem' }}>
                  🔒 Strict Attorney-Client & Fiscal Confidentiality Protected.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
