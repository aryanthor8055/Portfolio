import React from 'react'
import './Intro.css'
import Me from "../../img/me.jpeg"

const Intro = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, My name is</h2>
                    <h1 className='i-name'>Aryan Sharma</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Full Stack web Developer</div>
                            <div className='i-title-item'>Frontened Developer</div>
                            <div className='i-title-item'>UI/UX Developer</div>
                        </div>
                    </div>
                    <div className='i-desc'>
                        Creative and adaptable developer with a passion for optimizing software performance, streamlining workflows, and enhancing user experience.

                    </div>
                </div>
            </div>
            <div className='i-right'>
                <div className='i-bg'></div>
                <img src={Me} alt='' className='i-img' />
            </div>
        </div>
    )
}

export default Intro