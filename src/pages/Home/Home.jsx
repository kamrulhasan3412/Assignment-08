import React from "react";
import Navbar from "../../components/Header/Navbar";
import Banner from "../../components/Banner/Banner";
import Reviews from "../../components/Reviews/Reviews";
import { useLoaderData } from "react-router";
import Apps from "./Apps/Apps";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div>
      <Banner></Banner>

      <Reviews></Reviews>

      <Apps data={data}></Apps>
    </div>
  );
};

export default Home;
