import React from 'react'
import './ProductList.css'
import Product from '../product/Product'
import { products } from '../../data'

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className='pl-title'>
                    Create & inspire.It's Aryan
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem tempore corrupti omnis, molestias voluptatibus sed sequi quis, quidem quas doloremque non velit asperiores labore voluptas.
                </p>
            </div>
            <div className="pl-list">
                {products.map(product => (
                    <Product key={product.id} img={product.img} link={product.link} />
                ))}


            </div>
        </div>
    )
}

export default ProductList