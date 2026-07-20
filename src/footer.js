import './footer.css';
import insta from './images/instagram.png';
import whatsapp from './images/whatsapp.png';
import linkedin from './images/linkedin.png';

export default function Footer() {
  const email = 'rupesh.drk21@gmail.com';
  const address = 'Tarnaka, Hyderabad, 500007';

  return (
    <footer id="contact">
      <section className="section">
        <div className="contact-inner">
          <div>
            <span className="section-eyebrow">{'// contact'}</span>
            <h2 className="section-title">Let's talk</h2>
            <p className="section-subtitle" style={{ marginBottom: '20px' }}>
              Have a project in mind or just want to say hi? My inbox is open.
            </p>
            <div className="contact-details">
              <div className="contact-row">
                <i className="icon-envelope" aria-hidden="true"></i>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div className="contact-row">
                <i className="icon-location-pin" aria-hidden="true"></i>
                <span>{address}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="section-eyebrow">{'// elsewhere'}</span>
            <h2 className="section-title" style={{ fontSize: '22px', marginBottom: '18px' }}>Find me online</h2>
            <div className="hero-socials">
              <a
                className="social-icon"
                href="https://in.linkedin.com/in/rupesh-kumar-dappu"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <img src={linkedin} alt="" />
              </a>
              <a
                className="social-icon"
                href="https://www.instagram.com/drk_rupesh_kumar/?hl=en#"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram profile"
              >
                <img src={insta} alt="" />
              </a>
              <a
                className="social-icon"
                href="https://wa.link/hnc9wu"
                target="_blank"
                rel="noreferrer"
                aria-label="Message on WhatsApp"
              >
                <img src={whatsapp} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dappu Rupesh Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}
