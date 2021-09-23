import React from 'react';
import './Cart.css';
const Cart = (props) => {
    return (
        <div>
            <h3>Order Summary</h3>
            
                 <h5>Items Ordered: {props.cart.length}</h5>
        </div>
    );
};

export default Cart;