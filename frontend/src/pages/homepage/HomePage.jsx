import HeroSection from "./HeroSection";
import Categories from "../../components/Categories";
import FeaturedProducts from "../../components/FeaturedProducts";
import Newsletter from "../../components/Newsletter";

const Homepage = ({ products }) => {
  return (
    <>
      <HeroSection />
      <Categories />
      <FeaturedProducts products={products} />
      <Newsletter />
    </>
  );
};

export default Homepage;
