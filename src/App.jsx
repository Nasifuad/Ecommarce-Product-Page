import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
const App = () => {
  const navLinks = [
    { label: "Collection", href: "#collection" },
    { label: "Men", href: "#men" },
    { label: "Women", href: "#women" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <>
      <div className="max-container bg-[white] h-screen w-100%">
        <Header navLinks={navLinks} />
        <Hero />
      </div>
    </>
  );
};

export default App;
