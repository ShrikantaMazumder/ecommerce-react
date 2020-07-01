import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector, useDispatch } from 'react-redux';
import { detailProduct } from '../actions/productActions';

const Product = () => {
    const {id} = useParams();
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(detailProduct(id));
    },[]);

    return (
        loading ? <div>Loading</div> :
        error ? <div>{{error}}</div> :
        <div>
            <div className="back-to-result">
                <Link to="/">Back to results</Link>
            </div>
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product" />
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Stars ({product.reviews} reviews)
                        </li>
                        <li>
                            Price: $<strong>{product.price}</strong>
                        </li>
                        <li>
                            Description
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: {product.price}
                        </li>
                        <li>
                            Status: {product.status}
                        </li>
                        <li>
                            Qty: 
                            <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                {
                                    [...Array(product.countStock).keys()].map(x => <option key={x+1} value={x+1}>{x+1}</option>)
                                }
                            </select>
                        </li>
                        <li>
                            <button className="button">Add to cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Product;