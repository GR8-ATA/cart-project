
import React, { useEffect } from 'react'
import { useState } from 'react';
import watch1 from "./img/watch1.jpeg";
import watch2 from "./img/watch2.jpeg";
import watch3 from "./img/watch3.jpeg";
import watch4 from "./img/watch4.jpeg";
import watch5 from "./img/watch5.jpeg";
import watch6 from "./img/watch6.jpeg";
import watch7 from "./img/watch7.jpeg";
import watch8 from "./img/watch8.jpeg";
import watch9 from "./img/watch9.jpeg";
import watch10 from "./img/watch10.jpeg";



const Product = ()=> {
    
    const [cart, setCart] = useState([]);

    const getCartFromLS =()=>{
        setCart(JSON.parse(localStorage.getItem('cart-Items') || '[]'))
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
        },
        {
            Image: watch6,
            name: "watch 6",
            price:31000,
            id: 6
        },
        {
            Image: watch7,
            name: "watch 7",
            price:31000,
            id: 7
        }, 
        {
            Image: watch8,
            name: "watch 8",
            price:31000,
            id: 8
        },
        {   
            Image: watch9,
            name: "watch 9",
            price:31000,
            id: 9
        },
        {   Image: watch10,
            name: "watch 10",
            price:31000,
            id: 10
        }
        
    ]
    
    const submitHandler = (e) =>{
        let cartList = JSON.parse(localStorage.getItem('cart-Items') || '[]');
        cartList.push(cartItems);
        localStorage.setItem('cart-Items', JSON.stringify(cartList));
       
    }

    const addToCart = (id) =>{
       
        const findProduct = (product) => {
            return product.id ===  3;
        }
        const finder = products.find(findProduct);
        cartItems.push(finder);
        console.log(cartItems);
        
        submitHandler();
    }
    
    let cartItems = [];
    
   

    useEffect(()=>{
        getCartFromLS();
    }, [])

    return (
        <div>
           <div className='grid m-auto w-full xl:grid-cols-4 gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
            { products && products.map((produce) => (
                    
                    <div className='w-[300px]  h-[300px] m-auto bg-[grey] shadow-2xl'>
                        <div className='w-full h-[200px] m-auto rounded-lg'><img className='w-full h-full ' src={produce.Image}/></div>
                        <p className='text-black text-center p-[16px]'> USD {produce.price}</p>
                        <div className='w-full px-[20px]'>
                            <button className='m-auto w-full bg-blue-200 p-[8px]' onClick={addToCart}> Add to cart</button>
                        </div>    
                    </div>
                ))

            }
           </div>

            <div>
               <p> my cart list</p>

                <div>
                    { cart && cart.map((myCart, index) => (
                        <div>
                            <p>{myCart.price}</p>
                            <p>{myCart.name}</p>
                                                                                    
                        </div>
                    ))

                    }
                </div>
            </div>
        </div>
    )
}

export default Product;
