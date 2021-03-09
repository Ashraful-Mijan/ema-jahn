import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetails = () => {
    const {Key} = useParams()
    const item = fakeData.find(dt => dt.key === Key)
    return (
        <div className="container">
            <Products showButton={false} product={item} />
        </div>
    );
};

export default ProductDetails;