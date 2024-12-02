import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";
import { useState } from "react";
const ProductInfo = () => {
  const [count, setcount] = useState(0);
  return (
    <>
      <div className="xl:w-1/2 xl:p-14 p-5 mt-2 flex flex-col gap-5 ">
        <h4 className="font-kumbh text-gray-600 font-semibold text-sm uppercase">
          Sneaker Company
        </h4>
        <h1 className="font-kumbh xl:text-4xl text-2xl font-bold xl:text-nowrap  flex flex-col">
          Fall Limited Edition <span>Sneakers</span>
        </h1>
        <p className="font-kumbh text-sm text-[gray]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex xl:flex-col xl:items-start flex-row gap-5 xl:justify-center justify-between items-center ">
          <div className="flex gap-5 items-center">
            <p className="text-xl font-kumbh font-bold">$125.00</p>
            <p className="bg-black text-white text-sm font-kumbh font-bold px-2 py-1 rounded-lg">
              50%
            </p>
          </div>
          <p className="font-kumbh text-lg font-semibold text-[gray] line-through">
            $250.00
          </p>
        </div>
        <div>
          <div className="bg-gray-100 flex xl:justify-between justify-around items-center px-3 py-3 rounded-lg xl:w-[130px]">
            <img
              src={iconMinus}
              onClick={() => {
                count > 0 && setcount(count - 1);
              }}
              alt="minus"
            />
            <p className="font-semibold text-black">{count}</p>
            <img
              src={iconPlus}
              onClick={() => setcount(count + 1)}
              alt="plus"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
