import React from 'react';

function Nav(props) {
    const {
        setAboutSelected,
        aboutSelected,
        setContactSelected,
        contactSelected,
        setProjectSelected,
        projectSelected,
        setResumeSelected,
        resumeSelected
    } = props;
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Matthew Parker
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setAboutSelected(true);
                            setProjectSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);
                        }}
                        >
                            About Me
                        </span>
                    </li>
                    <li className={`mx-2 ${projectSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setAboutSelected(false);
                            setProjectSelected(true);
                            setContactSelected(false);
                            setResumeSelected(false);
                        }}
                        >
                            Portfolio
                        </span>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setAboutSelected(false);
                            setProjectSelected(false);
                            setContactSelected(true);
                            setResumeSelected(false);
                        }}
                        >
                            Contact
                        </span>
                    </li>
                    <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setAboutSelected(false);
                            setContactSelected(false);
                            setProjectSelected(false);
                            setResumeSelected(true);
                        }}
                        >
                            Resume
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Nav;