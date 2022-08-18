//Basic Imports
import React from 'react'
import "./App.css"


//Component Imports
import Content from './components/Content'
import Landing from './components/Landing'
import { useRef } from 'react'


const App = () => {

    const aboutRef = useRef()
    const projectRef = useRef()
    const contactRef = useRef()

    return (
        <body className='h-screen bg-charcoal text-yellow font-gilroy'>
            <div className='max-h-screen overflow-y-scroll overflow-hidden snap snap-y snap-mandatory scroll-smooth'>
                <div className='w-full h-screen snap-start'>
                    <Landing />
                </div>
                <Content />


            </div>
        </body>
    )
}

export default App