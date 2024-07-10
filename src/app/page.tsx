import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import NavComponent from '../components/NavComponent';
import AboutComponent from '../components/AboutComponent';
import PortfolioComponent from '../components/PortfolioComponent';
import ContactComponent from '../components/ContactComponent';

const HomePage: React.FC = () => {
    return (
        <>
            
            <main>
                <AboutComponent />
                <PortfolioComponent />
                <ContactComponent />
            </main>
        </>
    );
};

export default HomePage;
