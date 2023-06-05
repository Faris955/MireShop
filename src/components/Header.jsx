import React, { useContext, useEffect, useState } from "react";

// sidebar Context
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Header = () => {
  // header state
  const [isActive, setActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setActive(true) : setActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* logo */}

        <Link to="/">
          <div className="flex justify-center items-center">
            <img className="h-[25px]" src={Logo} alt="" />
            <span className="text-2xl font-bold">
              <i>MIRE Shop </i>
            </span>
          </div>
        </Link>
        <Link to="/" className="flex justify-center items-center hover:text-red-500 transition">
          <span>Home</span>
        </Link>

        {/* cart */}
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="tetx-2xl flex relative" />
          <div
            className="bg-red-500 absolute -right-2 -bottom-2 text-[12px]
        w-[18px] h-[18px] text-white rounded-full flex justify-center items-center"
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
