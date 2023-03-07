import React from 'react';
import {  Link, Outlet } from "react-router-dom";


const App = () => {

  return (
    <div className=' block m-auto w-full '>

        <div className='h-[60px] items-center justify-around bg-blue-500 w-full inline-flex'>
          <Link to='/Product'  className='text-[15px] hover:bg-white hover:text-blue-500 text-white py-[10px] text-center w-full '>Product</Link>
        </div>
        <br></br>

        <div className='w-[100%] m-auto'>
          <Outlet/>
        </div>
       
    </div>

  
      
  );
}

export default App;
