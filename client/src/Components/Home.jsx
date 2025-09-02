import React, { useState, useEffect } from "react";

import {  FaChevronLeft, FaChevronRight } from "react-icons/fa";


import { Link } from "react-router-dom";


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const slides = [
    {
      img: "/assets/img/banner_img_01.jpg",
      title: "Zay eCommerce",
      subtitle: "Tiny and Perfect eCommerce Template",
      description: (
        <>
          Zay Shop is an eCommerce HTML5 CSS template with latest version of
          Bootstrap 5 (beta 1). This template is 100% free provided by{" "}
          <a
            href="https://templatemo.com"
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:text-green-600 transition-colors duration-300 font-medium"
          >
            TemplateMo
          </a>
          .
        </>
      ),
    },
    {
      img: "/assets/img/banner_img_02.jpg",
      title: "Proident occaecat",
      subtitle: "Aliquip ex ea commodo consequat",
      description:
        "You are permitted to use this Zay CSS template for your commercial websites.",
    },
    {
      img: "/assets/img/banner_img_03.jpg",
      title: "Repr in voluptate",
      subtitle: "Ullamco laboris nisi ut",
      description:
        "We bring you 100% free CSS templates for your websites. Support TemplateMo if you like.",
    },
  ];

  const categories = [
    { img: "/assets/img/category_img_01.jpg", title: "Watches" },
    { img: "/assets/img/category_img_02.jpg", title: "Shoes" },
    { img: "/assets/img/category_img_03.jpg", title: "Accessories" },
  ];

  const products = [
    {
      img: "/assets/img/feature_prod_01.jpg",
      title: "Gym Weight",
      price: "$240.00",
      rating: 3,
      reviews: 24,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa.",
    },
    {
      img: "/assets/img/feature_prod_02.jpg",
      title: "Cloud Nike Shoes",
      price: "$480.00",
      rating: 3,
      reviews: 48,
      desc: "Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae.",
    },
    {
      img: "/assets/img/feature_prod_03.jpg",
      title: "Summer Addides Shoes",
      price: "$360.00",
      rating: 5,
      reviews: 74,
      desc: "Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam.",
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () =>
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  const nextSlide = () =>
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);

  return (
    <div className="font-sans bg-gray-50">
      {/* Search Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-95 flex flex-col items-center justify-center px-12">
          <div className="w-full max-w-2xl relative px-12">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-gray-600 hover:text-gray-900 text-3xl font-light transition-colors duration-300"
            >
              ✕
            </button>
            <form className="flex w-full shadow-lg rounded-lg overflow-hidden">
              <input
                type="text"
                name="q"
                placeholder="What are you looking for?"
                className="flex-grow p-4 border-0 focus:ring-2 focus:ring-green-500 focus:outline-none text-lg"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 transition-colors duration-300">
                <span className="text-lg">Search</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Carousel */}
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50 py-12 px-12">
        <div className="container mx-auto px-12">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 absolute translate-y-4"
              }`}
            >
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-20"></div>
                    <img
                      src={slide.img}
                      alt=""
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-3">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {slide.description}
                  </p>
                  <button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-green-600" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-md transition-colors duration-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-md transition-colors duration-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Categories */}
      <section className="container mx-auto py-16  px-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Categories of The Month
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 text-center"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="p-6">
                <h5 className="text-xl font-semibold mb-3">{cat.title}</h5>
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                  Go Shop
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-12">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Products
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-60 object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < product.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-600 text-sm">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="text-green-600 font-bold text-xl">
                      {product.price}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
                  <div className="flex justify-between items-center">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-full transition-colors duration-300 text-sm">
                      Add to Cart
                    </button>
                    <button className="text-gray-500 hover:text-green-600 transition-colors duration-300">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-green-600 py-12">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Stay updated with our latest products and offers by subscribing to our weekly
            newsletter.
          </p>
          <form className="flex flex-col sm:flex-row justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-3 rounded-l sm:rounded-r-none rounded mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-r sm:rounded-l-none rounded transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Open Modal Button */}
      {/* <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Search"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default Home;