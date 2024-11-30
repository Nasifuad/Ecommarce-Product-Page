import { useState } from "react";

/* eslint-disable react/prop-types */
const ProductShow = ({ Shoes }) => {
  const [bigShoe, setbigShoe] = useState(Shoes[0].full);

  function handleClick({ e, shoe }) {
    e.preventDefault();
    setbigShoe(shoe.full);
  }
  return (
    <>
      <div className=" flex flex-col gap-4 w-1/2">
        <img className="big rounded-2xl xl:w-3/4 " src={bigShoe} alt="" />

        <div className="mt-4 flex gap-4 rounded-xl lg:flex sm:hidden ">
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
