import './App.css';
import pp from './images/ceremo.jpeg';
import ttt from './images/ttt.png';

const PROJECTS = [
  {
    title: 'Ceremo Smart',
    thumb: pp,
    contain: false,
    desc: "An online event management system with separate USER and ADMIN modules. Users can register, log in, and book an event by choosing a theme, decor and entertainment from the options provided. They can also review past bookings, edit their profile, or cancel an upcoming event, while admins manage the platform's data behind the scenes.",
    tags: ['Django', 'Python', 'SQL', 'Bootstrap'],
    link: 'https://drkrupesh.pythonanywhere.com/home/',
    linkLabel: 'Visit website',
  },
  {
    title: 'Tic-Tac-Toe',
    thumb: ttt,
    contain: true,
    desc: 'A browser-based two-player Tic-Tac-Toe game with instant win/draw detection and a one-click restart. Built to be lightweight and dependency-free, so it loads and plays instantly on any device.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    link: 'https://rupesh-drk.github.io/tic-tac-toe',
    linkLabel: 'Play the game',
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <span className="section-eyebrow">{'// projects'}</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A couple of things I've built and shipped.</p>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-thumb${project.contain ? ' contain' : ''}`}>
                <img src={project.thumb} alt={`${project.title} preview`} />
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel} &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
