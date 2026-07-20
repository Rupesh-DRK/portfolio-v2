import './App.css';
import python from './images/Python.png';
import html from './images/HTML5.png';
import logo from './logo.svg';
import django from './images/django.png';
import bs from './images/bs.png';
import java from './images/java.png';
import php from './images/php.png';
import css from './images/css,png.png';
import js from './images/js.png';
import sql from './images/sql.png';
import mysql from './images/mysql.png';

const SKILLS = [
  { name: 'HTML5', img: html, href: 'https://www.geeksforgeeks.org/html5/' },
  { name: 'CSS3', img: css, href: 'https://www.w3schools.com/css/' },
  { name: 'JavaScript', img: js, href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Bootstrap', img: bs, href: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/' },
  { name: 'React JS', img: logo, href: 'https://react.dev/' },
  { name: 'Python', img: python, href: 'https://www.python.org/doc/' },
  { name: 'Django', img: django, href: 'https://docs.djangoproject.com/en/5.0/' },
  { name: 'PHP', img: php, href: 'https://www.php.net/docs.php' },
  { name: 'Java', img: java, href: 'https://docs.oracle.com/en/java/' },
  { name: 'SQL', img: sql, href: 'https://www.w3schools.com/sql/' },
  { name: 'MySQL Workbench', img: mysql, href: 'https://www.w3schools.com/MySQL/default.asp' },
];

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="section-inner">
        <span className="section-eyebrow">{'// skills'}</span>
        <h2 className="section-title">Technical skills</h2>
        <p className="section-subtitle">Languages, frameworks and tools I work with regularly.</p>

        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <a
              className="skill-card"
              key={skill.name}
              href={skill.href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={skill.img} alt={`${skill.name} documentation`} />
              <span>{skill.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
