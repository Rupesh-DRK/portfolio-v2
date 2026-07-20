import './App.css';

import Education from './education.js';
import Projects from './project.js';
import Skills from './skills.js';
import Certificates from './certificate.js';

function Container() {
  return (
    <>
      <Education />
      <Skills />
      <Projects />
      <Certificates />
    </>
  );
}

export default Container;
