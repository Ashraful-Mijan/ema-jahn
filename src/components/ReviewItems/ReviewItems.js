import React from 'react';

const ReviewItems = ({ product, removeProduct }) => {
    console.log(product)
    const { name, price, quantity, img, category, key } = product
    return (
        <div className="container">
            <div className="card mb-3 " >
                <div className="row g-0">
                    <div className="col-md-3">
                        <img className='w-100' src={img} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-primary">{name}</h5>
                            <p className="card-text">category: {category}</p>
                            <p className="card-text">quantity: {quantity}</p>
                            <p className="card-text fs-5"><small className="text-muted">$ {price}</small></p>

                            <button onClick={() => removeProduct(key)} className='btn btn-danger'>Remove</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewItems;