import { useState } from "react";
import { FaTruck, FaPercent, FaUser, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";


export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const brands = [
    ["assets/img/brand_01.png", "assets/img/brand_02.png", "assets/img/brand_03.png", "assets/img/brand_04.png"],
    ["assets/img/brand_01.png", "assets/img/brand_02.png", "assets/img/brand_03.png", "assets/img/brand_04.png"],
    ["assets/img/brand_01.png", "assets/img/brand_02.png", "assets/img/brand_03.png", "assets/img/brand_04.png"],
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % brands.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + brands.length) % brands.length);
  };

  return (
    <div>
      {/* About Section */}
      <section className="bg-green-600 py-10 px-12">
        <div className="container mx-auto px-12">
          <div className="flex flex-col md:flex-row items-center py-5">
            <div className="md:w-2/3 text-white">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img src="assets/img/about-hero.svg" alt="About Hero" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-10 px-12">
        <div className="text-center mb-10 px-12">
          <h1 className="text-3xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded-xl py-8 flex flex-col items-center">
            <FaTruck className="text-green-600 text-4xl" />
            <h2 className="mt-4 text-lg font-semibold">Delivery Services</h2>
          </div>
          <div className="bg-white shadow rounded-xl py-8 flex flex-col items-center">
            <FaExchangeAlt className="text-green-600 text-4xl" />
            <h2 className="mt-4 text-lg font-semibold">Shipping & Return</h2>
          </div>
          <div className="bg-white shadow rounded-xl py-8 flex flex-col items-center">
            <FaPercent className="text-green-600 text-4xl" />
            <h2 className="mt-4 text-lg font-semibold">Promotion</h2>
          </div>
          <div className="bg-white shadow rounded-xl py-8 flex flex-col items-center">
            <FaUser className="text-green-600 text-4xl" />
            <h2 className="mt-4 text-lg font-semibold">24 Hours Service</h2>
          </div>
        </div>
      </section>

      {/* Brands Carousel */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Our Brands</h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            Lorem ipsum dolor sit amet.
          </p>

          <div className="flex items-center justify-center space-x-4">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700"
            >
              <FaChevronLeft />
            </button>

            {/* Carousel */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {brands[currentSlide].map((img, index) => (
                <div key={index} className="flex justify-center">
                  <img src={img} alt="Brand Logo" className="w-24 sm:w-32" />
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
