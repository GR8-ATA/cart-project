
import React, { useEffect } from 'react'
import { useState } from 'react';
import watch1 from "./img/watch1.jpeg";
import watch2 from "./img/watch2.jpeg";
import watch3 from "./img/watch3.jpeg";
import watch4 from "./img/watch4.jpeg";
import watch5 from "./img/watch5.jpeg";

const Product = ()=> {
    
    const [cart, setCart] = useState([]);

    //Array that holds the localStorage items
    let cartList = JSON.parse(localStorage.getItem('cart-Items') || '[]');
    
    const getCartFromLS =()=>{
        //Set localStorage items in cart variable
        setCart(cartList)
    }

    const products = [
        {
            Image: watch1,
            name: "watch 1",
            price: 1000,
            id: 1
        },
        {
            Image: watch2,
            name: "watch 2",
            price: 21000,
            id: 2
        },

        {
            Image: watch3,
            name: "watch 3",
            price:31000,
            id: 3
        },
        {
            Image: watch4,
            name: "watch 4",
            price:31000,
            id: 4
        },
        {
            Image: watch5,
            name: "watch 5",
            price:31000,
            id: 5
        }
        
    ]
    
    const submitHandler = (e) =>{
        //Set local storage
        localStorage.setItem('cart-Items', JSON.stringify(cartList));

        //Call the getCartFromLS() to update cart variable
        getCartFromLS()
    }

    const addToCart = (id) =>{
       
        const findProduct = (product) => {
            return product.id ===  id ;
        }
        const finder = products.find(findProduct);
      
        //Push the new item into the Global array that holds the cart items
        cartList.push({...finder})
        
        //Call submit handler
        submitHandler();        
    }
    
  
    const removeFromCart=(index)=>{

        const newCart = cart.filter((carted, idx) => idx !== index)
        localStorage.setItem('cart-Items', JSON.stringify(newCart));
        setCart(newCart);
      
    }
   
    useEffect(()=>{
        getCartFromLS();
       
    }, [])

    return (
        <div>
           <div className='grid m-auto w-full xl:grid-cols-4 gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
            { products && products.map((produce, index) => (
                    
                    <div className='w-[300px]  h-[300px] m-auto bg-[grey] shadow-2xl' key={index}>
                        <div className='w-full h-[200px] m-auto rounded-lg'><img className='w-full h-full ' src={produce.Image} alt="Product"/></div>
                        <p className='text-black text-center p-[16px]'> USD {produce.price}</p>
                        <div className='w-full px-[20px]'>
                            <button className='m-auto w-full bg-blue-200 p-[8px]' onClick={()=>addToCart(produce.id)}> Add to cart</button>
                        </div>    
                    </div>
                ))

            }
           </div>

            <div className='bg-gray-300 my-[50px]'>
               <p className='text-[20px] text-center p-[20px]'>MY CART </p>
               <div className='grid m-auto w-full xl:grid-cols-4 gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1' >
                    { cart   && cart.map((myCart, index) => (                            
                        <div className='w-[250px]  h-[300px] m-auto bg-[grey] shadow-2xl' key={index}>
                            <div className='w-full h-[200px] m-auto rounded-lg'>
                                <img className='w-full h-full ' src={myCart.Image} alt="Product" />
                            </div>
                            <p className='text-black text-center pt-[5px]'> USD {myCart.name}</p>
                            <p className='text-black text-center pt-[5px]'> USD {myCart.price}</p>
                            <div className='w-full px-[20px]'>
                                <button className='m-auto w-full p-[8px]' onClick={()=>removeFromCart(index)}> remove</button>    
                            </div>    
                        </div>                                
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Product;
