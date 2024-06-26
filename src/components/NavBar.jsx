import React, { useEffect } from 'react';

import PokemonLogo from '../images/pokemon-logo.png'

const NavBar = ( onLinkClick ) => {
    const currentPath = window.location.pathname;

    // Navigate through different pages in the landing page
    const handleLinkClick = () => {
        if (typeof onLinkClick === 'function') {
            onLinkClick();
        }
    };

    // Add a sticky effect to the navigation bar

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            header.classList.toggle("sticky", window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className='header'>
            <div className='header-container'>
                <div className='landing-page-topbar-logo-section'>
                    <a className='logo' href="/Pokidex"><img src={PokemonLogo} alt="Logo" /></a>
                    <div className='links-to-pages'>
                        <a href="/Pokidex" onClick={handleLinkClick} className={currentPath === "/Pokidex/" ? "active-nav-menu-link" : ""}>Pokemons</a>
                        <a href="/Pokidex/?/about" onClick={handleLinkClick} className={currentPath === "/Pokidex/about" ? "active-nav-menu-link" : ""}>About</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;