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
                    Passionate about using technology to solve real-world problems
                </p>
                <p className='a-desc'>
                    I am an aspiring web developer with a strong passion for creating
                    innovative and <br /> user-friendly web applications.I have developed a number of projects that demonstrate my skills and knowledge in MERN STACK technology. I am dedicated to ongoing learning and staying up-to-date with the latest trends and technologies in the field.
                </p>
                <a href='https://drive.google.com/file/d/16gZbecMSQnTp9nu9r3waEfKj-2IfJnD5/view?usp=sharing' target='_blank' rel="noreferrer">
                    <button className='a-btn'>Download Resume</button>
                </a>
            </div>
        </div>
    )
}

export default About