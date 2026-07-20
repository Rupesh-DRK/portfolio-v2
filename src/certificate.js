import './App.css';
import jsd from './images/nimsme.png';
import besant from './images/besant.png';

const CERTS = [
  {
    title: 'Employability Skills Certification',
    thumb: null,
    issuer: 'TATA-Mahendra of TASK',
    note: 'Recognized by the Telangana Government.',
    date: null,
  },
  {
    title: 'Junior Software Developer',
    thumb: jsd,
    issuer: 'NIMS-ME, Yusufguda, Hyderabad',
    note: 'Recognized by the Telangana Government · 03 Nov 2022 – 17 Jan 2023',
    date: 'Issued 19 Jan 2023',
  },
  {
    title: 'Java Training',
    thumb: besant,
    issuer: 'Besant Technologies',
    note: null,
    date: 'Issued 12 Jul 2023',
  },
];

export default function Certificate() {
  return (
    <section className="section section--alt" id="certificates">
      <div className="section-inner">
        <span className="section-eyebrow">{'// certificates'}</span>
        <h2 className="section-title">Certificates</h2>
        <p className="section-subtitle">Formal training and government-recognized certifications.</p>

        <div className="cert-grid">
          {CERTS.map((cert) => (
            <div className="cert-card" key={cert.title}>
              {cert.thumb && (
                <div className="cert-thumb">
                  <img src={cert.thumb} alt={`${cert.title} certificate`} />
                </div>
              )}
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">
                <strong>{cert.issuer}</strong>
                {cert.note ? ` — ${cert.note}` : ''}
              </p>
              {cert.date && <span className="cert-date">{cert.date}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
