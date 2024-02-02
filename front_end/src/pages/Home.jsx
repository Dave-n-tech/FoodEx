import { useState } from "react";
import HomeHeader from "../layout-home/HomeHeader";
import HomeMenu from "../layout-home/HomeMenu";
import HomeImage from "../assets/HomeImage.png";
import ProductCard from "../components/ProductCard";
import "../styles/pages/Homepage.scss";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";
import DisplayCard from "../components/DisplayCard";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <HomeHeader isOpen={menuOpen} setIsOpen={setMenuOpen} />
      <HomeMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />
      {location.pathname === "/home" && (
        <main className="home-page">
          <section className="display-image sections">
            <img src={HomeImage} alt="" />
          </section>

          <section className="product-display sections">
            <h1 className="title">Browse the range</h1>
            <div className="product-list wrapper">
              <ProductCard
                src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706534665/Media_m866pl.png"
                heading="Vegetables"
              />
              <ProductCard
                src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706537325/unsplash_NPrWYa69Mz0_isfwmn.png"
                heading="Spices"
              />
              <ProductCard
                src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706537319/unsplash_M_xIaxQE3Ms_amfgy4.png"
                heading="Fruits"
              />
            </div>
          </section>
          <section className="our-products">
            <h1 className="title">Our Products</h1>
            <div className="product-wrapper">
              <DisplayCard />
              <DisplayCard />
              <DisplayCard />
              <DisplayCard />
              <DisplayCard />
              <DisplayCard />
            </div>
            <button className="view-more">Show More</button>
          </section>
        </main>
      )}
      <Outlet />
      <Footer />
    </>
  );
}
