import React, {useState} from 'react';
import './index.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Resume from './components/Resume';

function App() {

  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);

  return (
    <div>
      <div>
        <Nav
          setAboutSelected={setAboutSelected}
          aboutSelected={aboutSelected}
          setContactSelected={setContactSelected}
          contactSelected={contactSelected}
          setProjectSelected={setProjectSelected}
          projectSelected={projectSelected}
        />
      </div>
      <main>
        {aboutSelected ? (
          <About/>
        ) : contactSelected ? (
          <Contact/>
        ) : projectSelected ? (
          <Project/>
        ) : (
          <Resume/>
        )}
      </main>
      <div>Footer</div>
    </div>
  );
}

export default App;
