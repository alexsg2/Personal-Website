import React from 'react';
import { IntroSection, About, Skills, Projects, ContactMe } from '..';


function Home() {
    return (
        <div>
            <IntroSection />
            <About />
            <Skills />
            <Projects />
            <ContactMe />
        </div>
    );
}

export default Home;
