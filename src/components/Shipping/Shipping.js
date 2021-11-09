import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';
const Shipping = () => {
    const { register, handleSubmit,reset,   formState: { errors } } = useForm();

    const {user} = useAuth();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('https://calm-brushlands-10223.herokuapp.com/orders', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            // console.log(result);
            if(result.insertedId){
                    alert('Order proccessed successfully')
                    clearTheCart();
                    reset();
            }
        })

        console.log(data)
    };
    return (
        <div>
             <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
       
      <input defaultValue={user.displayName} {...register("name")} />
      <input defaultValue={user.email} {...register("email", { required: true })} />
      {errors.email && <span className="error">This field is required</span>} 
      <input placeholder="Address" defaultValue=" " {...register("address")} />
      <input placeholder="city" defaultValue=" " {...register("city")} />
      <input placeholder="phone number" defaultValue=" " {...register("phone")} />
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;