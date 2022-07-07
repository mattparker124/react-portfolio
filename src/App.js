import React, {useState} from 'react';
import './index.css';
import Nav from './components/Nav';

function App() {

  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

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
          setResumeSelected={setResumeSelected}
          resumeSelected={resumeSelected}
        />
      </div>
      <main>
        <div>Contact</div>
        <div>Projects</div>
      </main>
      <div>Footer</div>
    </div>
  );
}

export default App;
