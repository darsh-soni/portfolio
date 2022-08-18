import React from 'react'
import About from './content-items/About';
import Projects from './content-items/Projects';
import Contact from './content-items/Contact';

const Content = () => {
    return (
        <div>
            <div>
                <div>
                    <About />
                </div>
                <div>
                    <Projects />
                </div>
                <div>
                    <Contact />
                </div>
            </div>

        </div>
    )
}

export default Content