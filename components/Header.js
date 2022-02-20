import React, { useState, useEffect } from "react";
import "./style.module.css";

function Header() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  });

  return (
    <div
      className={`header w-screen fixed top-0 p-[20px]  h-14 z-10 transition-all ease-in duration-500 ${
        show && "bg-black"
      }`}>
      <div className='flex justify-between'>
        <img
          src='https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png'
          //   src="https://vermaden.files.wordpress.com/2021/09/logo-netflix.png"
          alt='1'
          className='fixed top-5 w-[80px] object-contain pl-[20px]'
        />
        <img
          src='https://play-lh.googleusercontent.com/iT-zYEPg6HQbn02LcUAXQx93alAoXzf4lLt14RzV4mArXVs7vQHjGFEr4-m2FBjzFC4'
          alt='1'
          className='fixed top-2 right-[20px] h-8 object-contain'
        />
      </div>
    </div>
  );
}

export default Header;
