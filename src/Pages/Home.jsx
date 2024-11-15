import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Poster from "../Components/Poster/Poster";
import Category from "../Components/Category/Category";
import Testimonials from "../Components/Testimonials/Testimonials";
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
