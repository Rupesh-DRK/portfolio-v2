import './App.css';
import './footer.css';
import React from 'react';
import Menu from './menu.js';
import ProfPage from './profPage.js';
import Container from './container.js';
import Footer from './footer.js';
import ScrollTop from './scrollTop.js';

function App() {
  return (
    <div className="site">
      <a href="#main" className="skip-link">Skip to content</a>
      <Menu />
      <main id="main">
        <ProfPage />
        <Container />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
