/* eslint-disable react/prop-types */
import { useState } from "react";
import iconCart from "../assets/images/icon-cart.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-close.svg";
import imageAvatar from "../assets/images/image-avatar.png";
const Header = ({ navLinks }) => {
  const [showCart, setShowCart] = useState();
  const [showMenu, setShowMenu] = useState(true);
  // const [menuIcon, setMenuIcon] = useState(iconMenu);
  const handleClick = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
    console.log("test");
  };
  return (
    <>
      <div className=" xl:max-container  pt-10 flex justify-between items-center shadow-sm relative sm:px-20">
        <div
          className="flex justify-center items-center gap-5
        "
        >
          <img
            src={showMenu ? iconMenu : iconClose}
            alt="menu"
            className="xl:hidden"
            onClick={(e) => handleClick(e)}
          />
          <h1 className="text-3xl font-kumbh lowercase text-[very-dark-blue] opacity-70 font-[800] ">
            Sneakers
          </h1>

          <ul className="hidden xl:flex  justify-center items-center gap-10">
            {navLinks.map((link) => {
              return (
                <li
                  className="nav text-[grey] font-semibold hover:cursor-pointer hover:text-[black]"
                  key={link.label}
                >
                  <a href={link.href}>{link.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-10">
          <img
            src={iconCart}
            alt="cart"
            onMouseOver={() => setShowCart(true)}
            onMouseLeave={() => setShowCart(false)}
          />
          <img
            className="hover:cursor-pointer hover:border-2 hover:border-[orange] rounded-full"
            src={imageAvatar}
            alt="avatar"
            width={40}
            height={40}
          />
        </div>
        {showCart && <Cart />}
      </div>
    </>
  );
};

const Cart = () => {
  return (
    <>
      <div
        className="absolute xl:bottom-[-200px] xl:right-[10px]
      bg-white shadow-lg xl:w-[300px] h-[200px]
       z-10 top-[100px]  w-full
      "
      >
        <h3 className="font-bold text-sm w-full p-4">Cart</h3>
        <hr />
        <div className="font-semibold text-[grey] h-[100px] grid place-content-center">
          <p>Your cart is empty</p>
        </div>
      </div>
    </>
  );
};
export default Header;
