import { useState } from "react";
import leftArrow from "../assets/images/icon-previous.svg";
import rightArrow from "../assets/images/icon-next.svg";
/* eslint-disable react/prop-types */
const ProductShow = ({ Shoes }) => {
  const [bigShoe, setbigShoe] = useState(Shoes[0].full);
  const [counter, setCounter] = useState(0);
  function handleClick({ e, shoe }) {
    e.preventDefault();
    setbigShoe(shoe.full);
    setCounter(Shoes.indexOf(shoe));
  }

  function handleClickLeft(e) {
    counter <= 0 ? setCounter(Shoes.length - 1) : setCounter(counter - 1);
    e.preventDefault();
    setbigShoe(Shoes[counter].full);
    console.log(counter);
  }
  function handleClickRight(e) {
    counter < Shoes.length - 1 ? setCounter(counter + 1) : setCounter(0);
    setbigShoe(Shoes[counter].full);
    e.preventDefault();
    console.log(counter);
  }
  return (
    <>
      <div className=" flex flex-col gap-4 xl:w-1/2 w-full">
        <div className="relative w-full">
          <img
            className="mt-2 big xl:rounded-2xl xl:w-3/4 w-full "
            src={bigShoe}
            alt=""
          />
          <img
            className="xl:hidden absolute top-1/2 left-0  p-3 bg-white rounded-full   cursor-pointer"
            src={leftArrow}
            onClick={(e) => {
              handleClickLeft(e);
            }}
            alt="left"
          />
          <img
            className="xl:hidden p-3 bg-white rounded-full  absolute top-1/2 right-0  cursor-pointer"
            src={rightArrow}
            alt="right"
            onClick={(e) => {
              handleClickRight(e);
            }}
          />
        </div>

        <div className="mt-4 gap-4 rounded-xl hidden lg:flex  ">
          {Shoes.map((shoe) => {
            return (
              <img
                key={shoe.label}
                className={`hover:opacity-70 cursor-pointer  rounded-2xl ${
                  shoe.full === bigShoe
                    ? "grayscale-0 border-2 border-[red] opacity-70"
                    : ""
                }`}
                src={shoe.thumbnail}
                alt={shoe.label}
                onClick={(e) => {
                  handleClick({ e, shoe });
                }}
                width={115}
                height={100}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductShow;
