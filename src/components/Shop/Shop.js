import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="shop-container">
             {/* .product-container+.cart-container */}
             <div className="product-container">
                 <h3>Products:{products.length}</h3>
                 {
                     products.map(product =>  <Product product={product}></Product>)
                 }
             </div>
             <div className="cart-container">
                 <h3>Order Summary</h3>
                 <h5>Items Ordered</h5>
             </div>
             
        </div>
    );
};

export default Shop;