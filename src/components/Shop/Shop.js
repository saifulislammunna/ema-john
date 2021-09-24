import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        console.log('product ApI called');
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            console.log('Products recived');
        })
    },[]);
    useEffect(() => {
        console.log('Loacal Storage cart Called');
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
        for(const key in savedCart){
             const addedProduct = products.find(product => product.key === key);
             console.log(key,addedProduct);
             storedCart.push(addedProduct)
            
          }
          setCart(storedCart);
        }
    }, [products]);
    const handleAddToCart = (product) => {
         const newCart = [...cart, product]
         setCart(newCart);
         // save to local storage (for now)
         addToDb(product.key);
    }
    return (
        <div className="shop-container">
             {/* .product-container+.cart-container */}
             <div className="product-container">
                  
                 {
                     products.map(product =>  <Product
                        key={product.key} 
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                 }
             </div>
             <div className="cart-container">
                 <Cart cart={cart}></Cart>
             </div>
             
        </div>
    );
};

export default Shop;