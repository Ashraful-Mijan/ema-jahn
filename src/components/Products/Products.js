import React from 'react';
import { Link } from 'react-router-dom';



const Products = ({product, showButton, addToCart}) => {
    const {name, img, price, category, key} = product
    return (
        <div className="card mb-3 " >
            <div className="row g-0">
                <div className="col-md-3">
                    <img className='w-100' src={img} alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-primary"><Link to={"/product/"+key}>{name}</Link></h5>
                        <p className="card-text">category: {category}</p>
                        <p className="card-text fs-5"><small className="text-muted">$ {price}</small></p>

                        { showButton && <button onClick={() => addToCart(product)} className="btn btn-danger">add to cart</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;