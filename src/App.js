//Basic Imports
import React from 'react'
import "./App.css"


//Component Imports
import Content from './components/Content'
import Landing from './components/Landing'



const App = () => {

    return (
        <div className='h-screen bg-charcoal text-yellow font-poppins'>
            <div className='max-h-screen overflow-y-scroll overflow-hidden snap snap-y snap-mandatory scroll-smooth'>
                <div className='w-full h-screen snap-start'>
                    <Landing />
                </div>
                <Content />


            </div>
        </div>
    )
}

export default App