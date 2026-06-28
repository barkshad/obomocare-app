import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { MapPin, Mail, Phone, MessageCircle, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const ContactItem = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
    <div style={{ padding: 'var(--space-3)', background: 'rgba(0,0,0,0.04)', borderRadius: 'var(--radius-sm)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon size={20} />
    </div>
    <div>
      <h3 style={{ fontWeight: 600, color: '#0A0A1A', marginBottom: 'var(--space-1)' }}>{title}</h3>
      {children}
    </div>
  </div>
);

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
      padding: 'var(--space-3) var(--space-4)',
      background: 'var(--surface-light)',
      border: '1px solid rgba(0,0,0,0.06)',
      borderRadius: 'var(--radius-sm)',
      color: 'rgba(0,0,0,0.72)',
      textDecoration: 'none',
      fontSize: 'var(--text-sm)',
      transition: 'border-color 200ms ease, color 200ms ease',
    }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)'; (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)'; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.06)'; (e.currentTarget as HTMLElement).style.color = 'rgba(0,0,0,0.72)'; }}
  >
    <Icon size={16} />
    {label}
  </a>
);

export const Contact: React.FC = () => {
  const { content } = useContent();
  const socials: Record<string, string> = (content.contact as any).socials || {};

  const socialLinks: { href: string; icon: any; label: string }[] = [];
  if (socials.facebook) socialLinks.push({ href: socials.facebook, icon: Facebook, label: 'Facebook' });
  if (socials.instagram) socialLinks.push({ href: socials.instagram, icon: Instagram, label: 'Instagram' });
  if (socials.twitter) socialLinks.push({ href: socials.twitter, icon: Twitter, label: 'Twitter / X' });
  if (socials.linkedin) socialLinks.push({ href: socials.linkedin, icon: Linkedin, label: 'LinkedIn' });

  return (
    <div className="section" style={{ background: '#FFFFFF', paddingTop: '6rem' }}>
      <div className="container" style={{ maxWidth: '48rem' }}>
        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">Contact us</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>
            Get in touch
          </h1>
          <p style={{ color: 'rgba(0,0,0,0.55)', maxWidth: '40ch', marginInline: 'auto', lineHeight: 1.7 }}>
            Questions, partnerships, or media enquiries — we reply within 48 hours.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', padding: 'var(--space-8)', background: 'var(--surface-light)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.06)' }}>
            <ContactItem icon={MapPin} title="Location">
              <p style={{ color: 'rgba(0,0,0,0.6)' }}>{content.contact.address}</p>
            </ContactItem>
            <ContactItem icon={Mail} title="Email">
              <a href={`mailto:${content.contact.email}`} style={{ color: 'var(--color-accent)' }}>{content.contact.email}</a>
            </ContactItem>
            <ContactItem icon={Phone} title="Phone">
              <p style={{ color: 'rgba(0,0,0,0.6)' }}>{content.contact.phone}</p>
            </ContactItem>
            <ContactItem icon={MessageCircle} title="WhatsApp">
              <p style={{ color: 'rgba(0,0,0,0.6)', marginBottom: 'var(--space-1)' }}>{content.contact.whatsapp}</p>
              <a href={`https://wa.me/${content.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>
                Chat on WhatsApp &rarr;
              </a>
            </ContactItem>
            <ContactItem icon={Clock} title="Office Hours">
              <p style={{ color: 'rgba(0,0,0,0.6)' }}>Mon – Fri: 8:00 AM – 5:00 PM</p>
              <p style={{ color: 'rgba(0,0,0,0.6)' }}>Sat: 9:00 AM – 1:00 PM</p>
            </ContactItem>
          </div>

          {socialLinks.length > 0 && (
            <div style={{ padding: 'var(--space-8)', background: 'var(--surface-light)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#0A0A1A', marginBottom: 'var(--space-6)' }}>
                Follow our work
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 'var(--space-3)' }}>
                {socialLinks.map((link) => (
                  <SocialLink key={link.label} {...link} />
                ))}
              </div>
            </div>
          )}

          <div style={{ padding: 'var(--space-8)', background: 'var(--surface-light)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#0A0A1A', marginBottom: 'var(--space-6)' }}>
              Donation Information
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)' }}>
              <div>
                <h3 style={{ fontWeight: 600, color: 'var(--color-accent)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Bank Details
                </h3>
                <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: 'var(--text-sm)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                  {content.contact.bankDetails}
                </p>
              </div>
              <div>
                <h3 style={{ fontWeight: 600, color: 'var(--color-accent)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  M-Pesa
                </h3>
                <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-1)' }}>
                  {content.contact.mpesa}
                </p>
                <a
                  href={`https://bit.ly/obomocare-mpesa`}
                  style={{ color: 'var(--color-accent)', fontSize: 'var(--text-xs)', fontWeight: 600, marginTop: 'var(--space-2)', display: 'inline-block' }}
                >
                  Quick guide to donate &rarr;
                </a>
              </div>
            </div>
          </div>

          <div style={{ padding: 'var(--space-10)', background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-mid))', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>
              Want to help directly?
            </h3>
            <p style={{ color: 'rgba(0,0,0,0.88)', marginBottom: 'var(--space-6)', lineHeight: 1.7, maxWidth: '38ch', marginInline: 'auto' }}>
              Every contribution reaches a household in Kisii or Nyamira. Full transparency, zero admin deductions.
            </p>
            <a href="/get-involved" className="btn btn--light">Support our work</a>
          </div>
        </div>
      </div>
    </div>
  );
};

