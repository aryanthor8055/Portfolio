import React from 'react'
import './About.css'
import A_img from '../../img/about-img.jpeg'


const About = () => {
    return (
        <div className='a'>
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img src={A_img} alt='' className='a-img' />
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>
                    About Me
                </h1>
                <p className='a-sub'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quo fugit.
                </p>
                <p className='a-desc'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias reiciendis nisi, tenetur unde asperiores veritatis laudantium quae repudiandae fugit accusantium obcaecati corrupti consectetur?
                </p>
                <a href='https://bit.ly/Aryan-CV' target='_blank' rel="noreferrer">
                    <button className='a-btn'>Download Resume</button>
                </a>
            </div>
        </div>
    )
}

export default About