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
                    As per my Knowledge and interest,I created my Projects <br /> related to my Technologies.
                </p>
            </div>
            <div className="pl-list">
                {products.map(product => (

                    <Product key={product.id} img={product.img} link={product.link} name={product.name} Des={product.Des} />

                ))}

            </div>

        </div>
    )
}

export default ProductList