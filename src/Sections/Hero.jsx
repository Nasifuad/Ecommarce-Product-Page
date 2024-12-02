/* eslint-disable react/prop-types */
import ProductInfo from "../Components/ProductInfo";
import ProductShow from "../Components/ProductShow";
import { Shoes } from "../Constrants";
const Hero = ({ handleAddToCart }) => {
  return (
    <>
      <div className="  xl:max-container  w-100% flex flex-col  xl:flex-row justify-center items-center  ">
        <ProductShow Shoes={Shoes} />
        <ProductInfo handleAddToCart={handleAddToCart} />
      </div>
    </>
  );
};

export default Hero;
