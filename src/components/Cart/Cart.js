import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({cart}) => {
    const totalPrice = cart.reduce((total, pd) => total + pd.price * pd.quantity, 0)
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <p className="card-text">Items: {cart.length}</p>
                <p className="card-text">Total: {totalPrice}</p>
                <Link to='/review'><button className="btn btn-primary">review cart</button></Link>
            </div>
        </div>
    );
};

export default Cart;