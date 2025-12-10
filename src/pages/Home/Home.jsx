import React from "react";
import Navbar from "../../components/Header/Navbar";
import Banner from "../../components/Banner/Banner";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Reviews></Reviews>
      </section>
    </div>
  );
};

export default Home;
