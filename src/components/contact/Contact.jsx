import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import Email from "../../img/email.png"
import Address from "../../img/address.png"

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_geij3x9', 'template_ycppl7b', formRef.current, 'usQP8LCS1IHYj7crH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                setDone(true)
            });
    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className='c-title'>
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Email} alt='' className='c-icon' />
                            Aryan16072001236809@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt='' className='c-icon' />
                            Krishna kunj Avas Vikas Hathras-204101
                        </div>

                    </div>
                </div>
                <div className="c-right">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name' />
                        <input type="text" placeholder='Subject' name='user_subject' />
                        <input type="email" placeholder='Email' name='user_email' />
                        <textarea rows='5' placeholder='Message' name='message' />
                        <button>Submit</button>
                        {done && "Thank you for messaging"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact