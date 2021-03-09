import React from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import fakeData from '../../fakeData'
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products] = useState(first10);
    const [cart, setCart] = useState([]);

    const addToCart = product => {
        // const item = products.find(pd => pd.key === product.key);
        const newCart = [...cart, product];
        setCart(newCart)

        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count)
    }

    return (
        <div className='container bg-light'>
            <div className="row">
                <div className="col-md-8">
                    {
                        products.map(pd => <Products showButton={true} key={pd.key} addToCart={addToCart} product={pd} />)
                    }
                </div>
                <div className="col-md-4">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Shop;