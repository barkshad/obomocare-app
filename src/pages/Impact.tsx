import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const yearData = [
  { year: '2020', families: 200 },
  { year: '2021', families: 480 },
  { year: '2022', families: 850 },
  { year: '2023', families: 1300 },
  { year: '2024', families: 1800 },
  { year: '2025', families: 2100 },
];

const milestones = [
  { year: '2020', label: 'First lockdown response', detail: 'Seven households found in Mama Kerubo\'s village. Started.' },
  { year: '2021', label: '50 households served', detail: 'Formalised as OBOMOCARE. Registered CBO in Kisii.' },
  { year: '2022', label: '30 caregivers trained', detail: 'First formal caregiver cohort. Transport programme launched.' },
  { year: '2023', label: '1,000 households milestone', detail: 'Volunteer corps grew to 40. Mobile clinic partnerships formed.' },
  { year: '2024', label: 'Zero admin pledge public', detail: 'Published quarterly report. Zero international funding maintained.' },
  { year: '2025', label: '2,000+ families and counting', detail: 'Scaling to 1,500 active programme households. Proposal submitted.' },
];

export const Impact: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="section" style={{ background: '#FFFFFF', paddingTop: '6rem' }}>
      <div className="container">

        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">Impact</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>
            Our Impact
          </h1>
          <p style={{ color: 'rgba(0,0,0,0.55)', maxWidth: '40ch', marginInline: 'auto', lineHeight: 1.7 }}>
            Five years. Zero international funding. Every number is a real household.
          </p>
        </div>

        <div className="stats" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)', marginBottom: 'var(--space-16)' }}>
          {[
            { num: '2,000+', label: 'Families served since 2020' },
            { num: '5 yrs', label: 'Community-funded' },
            { num: '40', label: 'Active caregivers' },
            { num: '22', label: 'Programme coordinators' },
          ].map((item, i) => (
            <div key={i} className="stat">
              <div className="stat__number">{item.num}</div>
              <div className="stat__label">{item.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 'var(--space-16)' }}>
          <div className="features-head" style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <div className="features-head__tag">Evidence</div>
            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>
              What the numbers show
            </h2>
          </div>

          <div style={{
            padding: 'var(--space-10)',
            background: 'var(--surface-light)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-8)' }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: '#0A0A1A', marginBottom: 'var(--space-2)' }}>
                  Households supported over time
                </h3>
                <p style={{ color: 'rgba(0,0,0,0.55)', fontSize: 'var(--text-sm)' }}>
                  Cumulative count through to end 2025
                </p>
              </div>
              <div style={{
                padding: 'var(--space-3) var(--space-5)',
                background: 'var(--color-accent)',
                borderRadius: 'var(--radius-sm)',
                color: '#0A0A1A',
                fontWeight: 700,
                fontSize: 'var(--text-2xl)',
                lineHeight: 1,
              }}>
                {yearData[yearData.length - 1].families.toLocaleString()}
              </div>
            </div>

            <div style={{ width: '100%', height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
                  <XAxis
                    dataKey="year"
                    stroke="rgba(255,255,255,0.3)"
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="rgba(255,255,255,0.3)"
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v: number) => `${v}`}
                  />
                  <Tooltip
                    cursor={{ fill: 'rgba(232,117,26,0.08)' }}
                    contentStyle={{
                      background: '#14142A',
                      border: '1px solid rgba(0,0,0,0.06)',
                      borderRadius: '8px',
                      color: '#0A0A1A',
                      fontSize: '13px',
                    }}
                    labelStyle={{ color: 'rgba(0,0,0,0.6)', marginBottom: '4px' }}
                    formatter={(value: any) => [`${value} households`, 'Cumulative']}
                  />
                  <Bar
                    dataKey="families"
                    fill="var(--color-accent)"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={56}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="kpi-grid" style={{ marginBottom: 'var(--space-16)' }}>
          {[
            { num: '1,500', label: 'Vulnerable households enrolled and receiving full programme support' },
            { num: '80%', label: 'Of enrolled households with adequate food access' },
            { num: '85%', label: 'Clinic appointment attendance rate' },
            { num: '90%', label: 'Beneficiaries reporting improved dignity' },
          ].map((kpi, i) => (
            <div key={i} className="kpi">
              <div className="kpi__number">{kpi.num}</div>
              <div className="kpi__label">{kpi.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 'var(--space-16)' }}>
          <div className="features-head" style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <div className="features-head__tag">Our journey</div>
            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>
              Key milestones
            </h2>
          </div>

          <div style={{ position: 'relative', paddingLeft: 'var(--space-8)' }}>
            <div style={{
              position: 'absolute',
              left: 7,
              top: 8,
              bottom: 8,
              width: 2,
              background: 'rgba(0,0,0,0.06)',
            }} />
            {milestones.map((m, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  paddingLeft: 'var(--space-8)',
                  paddingBottom: 'var(--space-10)',
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: i === milestones.length - 1 ? 'var(--color-accent)' : 'var(--surface-elevated)',
                  border: `2px solid ${i === milestones.length - 1 ? 'var(--color-accent)' : 'rgba(0,0,0,0.15)'}`,
                }} />
                <div>
                  <div style={{
                    display: 'inline-block',
                    padding: '2px var(--space-3)',
                    background: 'rgba(0,0,0,0.04)',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    marginBottom: 'var(--space-2)',
                    letterSpacing: '0.05em',
                  }}>
                    {m.year}
                  </div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: '#0A0A1A', marginBottom: 'var(--space-2)' }}>
                    {m.label}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(0,0,0,0.6)', lineHeight: 1.7, maxWidth: '52ch' }}>
                    {m.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: 'var(--space-12)', background: 'var(--surface-light)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.06)', textAlign: 'center' }}>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(0,0,0,0.72)', lineHeight: 1.6, maxWidth: '40ch', marginInline: 'auto', marginBottom: 'var(--space-6)' }}>
            We have not measured our impact on depression scores yet. We plan to start in 2026.
          </p>
          <a href="/get-involved" className="btn btn--accent">
            Be part of the next chapter
          </a>
        </div>
      </div>
    </div>
  );
};

