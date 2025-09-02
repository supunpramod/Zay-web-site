"use client";
import { useState } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight, FaHeart, FaEye, FaCartPlus, FaStar } from "react-icons/fa";

const products = [
  { id: 1, name: "Oupidatat non", price: 250, img: "/assets/img/shop_01.jpg" },
  { id: 2, name: "Oupidatat non", price: 250, img: "/assets/img/shop_02.jpg" },
  { id: 3, name: "Oupidatat non", price: 250, img: "/assets/img/shop_03.jpg" },
  { id: 4, name: "Oupidatat non", price: 250, img: "/assets/img/shop_04.jpg" },
  { id: 5, name: "Oupidatat non", price: 250, img: "/assets/img/shop_05.jpg" },
  { id: 6, name: "Oupidatat non", price: 250, img: "/assets/img/shop_06.jpg" },
  { id: 7, name: "Oupidatat non", price: 250, img: "/assets/img/shop_07.jpg" },
  { id: 8, name: "Oupidatat non", price: 250, img: "/assets/img/shop_08.jpg" },
  { id: 9, name: "Oupidatat non", price: 250, img: "/assets/img/shop_09.jpg" },
];

const brands = ["/assets/img/brand_01.png", "/assets/img/brand_02.png", "/assets/img/brand_03.png", "/assets/img/brand_04.png"];

export default function Shop() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % brands.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + brands.length) % brands.length);

  return (
    <div className="container mx-auto py-8 px-12">
      {/* Categories */}
      <div className="grid lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-4">
            <li>
              <details open>
                <summary className="cursor-pointer text-lg font-medium">Gender</summary>
                <ul className="ml-4 mt-2 space-y-1">
                  <li><a href="#" className="text-gray-600 hover:text-green-600">Men</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-600">Women</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer text-lg font-medium">Sale</summary>
                <ul className="ml-4 mt-2 space-y-1">
                  <li><a href="#" className="text-gray-600 hover:text-green-600">Sport</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-600">Luxury</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer text-lg font-medium">Product</summary>
                <ul className="ml-4 mt-2 space-y-1">
                  <li><a href="#" className="text-gray-600 hover:text-green-600">Bag</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-600">Sweater</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-600">Sunglass</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* Product List */}
        <div className="lg:col-span-3">
          {/* Filter Header */}
          <div className="flex justify-between items-center mb-6">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-lg text-gray-800 hover:text-green-600">All</a></li>
              <li><a href="#" className="text-lg text-gray-800 hover:text-green-600">Men's</a></li>
              <li><a href="#" className="text-lg text-gray-800 hover:text-green-600">Women's</a></li>
            </ul>
            <select className="border px-3 py-2 rounded-md">
              <option>Featured</option>
              <option>A to Z</option>
              <option>Item</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white shadow rounded-lg overflow-hidden group relative">
                <img src={product.img} alt={product.name} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-3 transition">
                  <button className="p-2 bg-green-600 text-white rounded-full"><FaHeart /></button>
                  <button className="p-2 bg-green-600 text-white rounded-full"><FaEye /></button>
                  <button className="p-2 bg-green-600 text-white rounded-full"><FaCartPlus /></button>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="flex justify-center space-x-1 text-yellow-500 my-2">
                    <FaStar /><FaStar /><FaStar /><FaStar className="text-gray-400" /><FaStar className="text-gray-400" />
                  </div>
                  <p className="text-gray-800 font-medium">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-8 space-x-2">
            <button className="px-4 py-2 border rounded-md bg-green-600 text-white">1</button>
            <button className="px-4 py-2 border rounded-md">2</button>
            <button className="px-4 py-2 border rounded-md">3</button>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <section className="bg-gray-100 mt-16 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Our Brands</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <button onClick={prevSlide}><FaChevronLeft size={24} className="text-gray-600" /></button>
          <img src={brands[currentSlide]} alt="brand" className="h-16 object-contain" />
          <img src={brands[(currentSlide + 1) % brands.length]} alt="brand" className="h-16 object-contain" />
          <img src={brands[(currentSlide + 2) % brands.length]} alt="brand" className="h-16 object-contain" />
          <img src={brands[(currentSlide + 3) % brands.length]} alt="brand" className="h-16 object-contain" />
          <img src={brands[(currentSlide + 4) % brands.length]} alt="brand" className="h-16 object-contain" />

          <button onClick={nextSlide}><FaChevronRight size={24} className="text-gray-600" /></button>
        </div>
      </section>
    </div>
  );
}
