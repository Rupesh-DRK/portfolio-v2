import './App.css';
import proPic from './images/pro-pic.jpg';
import insta from './images/instagram.png';
import whatsapp from './images/whatsapp.png';
import linkedin from './images/linkedin.png';

export default function ProfPage() {
  const owner = 'Dappu Rupesh Kumar';
  const role = 'Web Developer';
  const location = 'Hyderabad, India';
  const stack = 'Python · Java · React · Django · SQL';

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="section-eyebrow">$ whoami</span>
          <h1 className="hero-name">
            {owner}
          </h1>
          <p className="hero-role">{role} &middot; Hyderabad, India</p>
          <p className="hero-bio">
            Recent <strong>M.Sc — Computer Science</strong> graduate from{' '}
            <strong>University College of Science, Osmania University</strong>.
            I build full-stack web apps end to end — from Django and PHP backends
            to React front ends — and I like turning rough ideas into things
            people can actually click through.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">View projects</a>
            <a className="btn btn-secondary" href="#contact">Get in touch</a>
          </div>
          <div className="hero-socials color-primary">
            <a
              className="social-icon"
              href="https://in.linkedin.com/in/dappu-rupesh-kumar"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <img src={linkedin} alt="" />
            </a>
            <a
              className="social-icon"
              href="https://www.instagram.com/drk_rupesh_kumar"
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
            <a
              className="social-icon"
              href="mailto:rupesh.drk21@gmail.com"
              aria-label="Send an email"
            >
              <i className="icon-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="terminal" aria-hidden="true">
          <div className="terminal-titlebar">
            <span></span><span></span><span></span>
            <span className="terminal-titlebar-label">profile</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-avatar-row">
              <div className="terminal-avatar">
                <img src={proPic} alt="" />
              </div>
              <div>
                <div className="terminal-line"><span className="terminal-cmd">{owner}</span></div>
                <div className="terminal-line"><span className="terminal-val">{role}</span></div>
              </div>
            </div>
            
            <div className="terminal-line">
              <span className="terminal-key">role</span>
              <span className="terminal-val">: {role}</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-key">stack</span>
              <span className="terminal-val">: {stack}</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-key">location</span>
              <span className="terminal-val">: {location}</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-key">status</span>
              <span className="terminal-val">: open to work</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-prompt">@portfolio</span>
              <span className="terminal-val">:~$</span>
              <span className="cursor"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
