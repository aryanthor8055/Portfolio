import React from 'react'
import './Product.css'


const Product = ({ img, link, name, Des }) => {
    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <span className='p-name'>{name}</span>
            </div>
            <div>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={img} alt='' className='p-img' />
                </a>
            </div>
            <div className='p-desc'>{Des}</div>


        </div>
    )
}

export default Product