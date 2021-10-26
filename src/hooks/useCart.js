import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";
 /* products dependency kea shorai felci */
const useCart = () => {
    const [cart,setCart] = useState([]);


    /* mongodb tea data pathao */
    useEffect(() => {
        const savedCart = getStoredCart();
       /*  console.log(savedCart); */
         const keys = Object.keys(savedCart);
         
        fetch('http://localhost:5000/products/byKeys',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(products => {
            console.log(products);
            if (products.length) {
                 const storedCart = [];
                for(const key in savedCart){
                    const addedProduct = products.find(product => product.key === key);
                   
                    if(addedProduct){
                        // set quantity
                        const quantity = savedCart[key];
                        
                        addedProduct.quantity = quantity;
                        storedCart.push(addedProduct);
                    }
                }
                setCart(storedCart);
                
            }
        }) 
    },[]);
    
    /* useEffect(() =>{
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    // set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    },[products]) */


    
    return[cart,setCart];
}

export default useCart;