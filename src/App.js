import React, {useState} from 'react';
import './index.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  const [aboutSelected, setAboutSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(true);

  return (
    <div>
      <div>
        <Nav
          setAboutSelected={setAboutSelected}
          aboutSelected={aboutSelected}
          setContactSelected={setContactSelected}
          contactSelected={contactSelected}
          setPortfolioSelected={setPortfolioSelected}
          portfolioSelected={portfolioSelected}
        />
      </div>
      <main>
        {aboutSelected ? (
          <About/>
        ) : contactSelected ? (
          <Contact/>
        ) : portfolioSelected ? (
          <Portfolio/>
        ) : (
          <Resume/>
        )}
      </main>
      <div>Footer</div>
    </div>
  );
}

export default App;
