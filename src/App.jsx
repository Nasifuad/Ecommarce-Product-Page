import { useState } from "react";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import { Shoes } from "./Constrants";
const App = () => {
  const navLinks = [
    { label: "Collection", href: "#collection" },
    { label: "Men", href: "#men" },
    { label: "Women", href: "#women" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  const [count, setcount] = useState(0);
  const handleAddToCart = (count) => {
    setcount(count);
    console.log(count);
  };
  return (
    <>
      <div className=" bg-[white] h-screen w-full">
        <Header navLinks={navLinks} count={count} />
        <Hero handleAddToCart={handleAddToCart} Shoes={Shoes} />
      </div>
    </>
  );
};

export default App;
