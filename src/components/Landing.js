import React from 'react'
import Typewriter from "typewriter-effect";
import { FaRegCaretSquareDown, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"


const Landing = () => {
    return (
        <div className='h-screen w-full'>

            <div className=' flex p-10 text-4xl'>
                <a href='https://github.com/darshsoni28/' target='_blank' className='ml-auto transition ease-in-out hover:text-custom-white hover:scale-110'>
                    <FaGithubSquare />
                </a>
                <a href='https://www.linkedin.com/in/darsh-soni/' target='_blank' className='transition ease-in-out hover:text-custom-white hover:scale-110'>
                    <FaLinkedin />
                </a>
                <a href='https://www.instagram.com/darsh._.soni/' target='_blank' className='transition ease-in-out hover:text-custom-white hover:scale-110'>
                    <FaInstagramSquare />
                </a>
            </div>

            <div className='flex font-bold text-6xl backdrop-blur-lg h-screen'>
                <div className='p-10 mt-32'>
                    <div className='  '>
                        <h1 className='text-custom-white'>Hi, I am</h1>
                        <Typewriter
                            options={{
                                strings: ['Darsh Soni'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className=' text-lg mt-32 '>
                        <p className='text-custom-white'>
                            I build things for the
                        </p>
                        <Typewriter

                            options={{
                                strings: ['Web', 'Mobile', 'Desktop'],
                                autoStart: true,
                                loop: true,
                            }}

                            onInit={(typewriter) => {

                                typewriter

                                    // .typeString("")

                                    .pauseFor(1000)
                                    .deleteAll()
                                    // .typeString("Web Developer")
                                    .start();
                            }}
                        />
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Landing