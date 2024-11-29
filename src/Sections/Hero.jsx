import ProductInfo from "../Components/ProductInfo";
import ProductShow from "../Components/ProductShow";
import { Shoes } from "../Constrants";
const Hero = () => {
  return (
    <>
      <div className=" p-10 max-container flex justify-center  ">
        <ProductShow Shoes={Shoes} />
        <ProductInfo />
      </div>
    </>
  );
};

export default Hero;
