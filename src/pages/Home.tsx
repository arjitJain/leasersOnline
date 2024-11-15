import React from "react";
import Navbar from "../components/navbar/Navbar";
import Poster from "../components/poster/Poster";
import Category from "../components/category/Category";
import Testimonials from "../components/testimonials/Testimonials";
const Home = () => {
  return (
    <>
      <Navbar />
      <Poster />
      <Category />
      <Testimonials />
    </>
  );
};

export default Home;
