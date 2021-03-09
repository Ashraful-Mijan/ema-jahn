import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([])

    const removeProduct = (productKey) => {
        console.log('click remove');
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)

        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key]
            return product;
        });
        setCart(cartProduct)
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8">
                    {
                        cart.map(pd => <ReviewItems key={pd.key} removeProduct={removeProduct} product={pd} />)
                    }
                </div>
                <div className="col-md-4">
                   <Cart cart={cart} /> 
                </div>
            </div>
        </div>
    );
};

export default Review;