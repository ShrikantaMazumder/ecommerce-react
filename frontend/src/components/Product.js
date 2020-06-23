import React from 'react';
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import data from '../data';

const Product = () => {
    const products = data.products;
    const {id} = useParams();
    const product = products.find(prod => prod._id === id);
    console.log(product)
    return (
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
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
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