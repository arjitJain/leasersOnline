import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "../../assets/canon.png";
import Image2 from "../../assets/lappy.png";
import Image3 from "../../assets/game.png";


const ImageList = [
    {
      id: 1,
      img: Image,
      title: "High-Performance Laptop Rental",
      description:
       "Rent our cutting-edge laptop equipped with the latest Intel Core i7 processor, 16GB RAM, and 512GB SSD. Perfect for students, professionals, or anyone"
    },
    {
      id: 2,
      img: Image2,
      title: "DSLR Camera for Rent",
      description:
        "Capture stunning photos with our professional DSLR camera rental. Featuring a 24MP sensor and interchangeable lenses"
    },
    {
      id: 3,
      img: Image3,
      title: " Next-Gen Game Console Rental",
      description:
        "Dive into immersive gaming with our next-gen game console rental. Includes access to the latest titles and multiplayer capabilities"
    }
  ];
  // handleOrderPopup
  const Poster = () => {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "ease-in-out",
      pauseOnHover: false,
      pauseOnFocus: true,
    };

    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
           {/* Slider background design */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-30 z-0"></div>
          {/* hero section */}
          <div className="container pb-8 sm:pb-0">
            <Slider {...settings}>
              {ImageList.map((data) => (
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text content section */}
                    <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                      >
                        {data.title}
                      </h1>
                      <p
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className="text-sm"
                      >
                        {data.description}
                      </p>
                      <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="300"
                      >
                        {/* <button
                          // onClick={handleOrderPopup}
                          className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                        >
                          Visit Now
                        </button> */}
                      </div>
                    </div>
                    {/* image section */}
                    <div className="order-1 sm:order-2">
                      <div
                        data-aos="zoom-in"
                        data-aos-once="true"
                        className="relative z-10"
                      >
                        <img
                          src={data.img}
                          alt=""
                          className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      );
    
}
    export default Poster;
    