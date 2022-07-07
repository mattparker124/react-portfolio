import React from 'react';

function Nav(props) {
    const {
        setAboutSelected,
        aboutSelected,
        setContactSelected,
        contactSelected,
        setPortfolioSelected,
        portfolioSelected
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
                    <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setAboutSelected(false);
                            setPortfolioSelected(true);
                            setContactSelected(false);
                        }}
                        >
                            Portfolio
                        </span>
                    </li>
                    <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setAboutSelected(true);
                            setPortfolioSelected(false);
                            setContactSelected(false);
                        }}
                        >
                            About Me
                        </span>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setAboutSelected(false);
                            setPortfolioSelected(false);
                            setContactSelected(true);
                        }}
                        >
                            Contact
                        </span>
                    </li>
                    <li className={`mx-2 ${!aboutSelected && !contactSelected && !portfolioSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setAboutSelected(false);
                            setContactSelected(false);
                            setPortfolioSelected(false);
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