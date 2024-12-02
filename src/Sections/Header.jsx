/* eslint-disable react/prop-types */
import { useState } from "react";
import iconCart from "../assets/images/icon-cart.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-close.svg";
import imageAvatar from "../assets/images/image-avatar.png";
import imageShoe from "../assets/images/image-product-1-thumbnail.jpg";
const Header = ({ navLinks, count }) => {
  const [showCart, setShowCart] = useState();
  const [showMenu, setShowMenu] = useState();

  // const [menuIcon, setMenuIcon] = useState(iconMenu);
  const handleClick = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
    console.log("test");
  };
  return (
    <>
      <div className=" xl:max-container  xl:px-20 px-5 py-5 flex justify-between items-center shadow-sm relative sm:px-20 w-full">
        {showMenu && <Sidebar setShowMenu={setShowMenu} navLinks={navLinks} />}
        <div
          className="flex justify-center items-center gap-5
        "
        >
          <img
            src={!showMenu ? iconMenu : iconClose}
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
      </div>
      {showCart && <Cart count={count} />}
    </>
  );
};

const Cart = ({ count }) => {
  return (
    <>
      <div
        className="absolute xl:bottom-[-200px] xl:right-[300px]
      bg-white shadow-lg xl:w-[300px] h-[200px]
       z-10 top-[100px]  w-full
      "
      >
        <h3 className="font-bold text-2xl text-[black] w-full p-4">Cart</h3>
        <hr />
        <div className="font-semibold text-[grey] h-[100px] grid place-content-center">
          {count ? (
            <CarItem count={count} />
          ) : (
            <p className="text-[grey]">Your cart is empty</p>
          )}
        </div>
      </div>
    </>
  );
};
const Sidebar = ({ setShowMenu, navLinks }) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-[250px] h-screen bg-white z-10 p-10">
        <img src={iconClose} alt="close" onClick={() => setShowMenu(false)} />
        <ul
          className="flex 
          flex-col justify-center items-center gap-10 mt-10"
        >
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
    </>
  );
};
const CarItem = ({ count }) => {
  return (
    <div className=" w-full gap-10 flex justify-between items-center">
      <div className="flex justify-start items-center">
        <img src={imageShoe} alt="shoe" className="w-[60px] h-[60px]" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold">Fall Limited Edition Sneakers</p>
        <div className="flex">
          <p className="text-sm flex gap-2 text-[grey]">
            $125.00 x {count}{" "}
            <span className="font-bold">${count * 125}.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
