import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-12 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-green-500 border-b border-gray-600 pb-3">
              Zay Shop
            </h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>123 Consectetur at ligula 10660</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:010-020-0340" className="hover:text-green-400">
                  010-020-0340
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a
                  href="mailto:info@company.com"
                  className="hover:text-green-400"
                >
                  info@company.com
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-2xl font-bold border-b border-gray-600 pb-3">
              Products
            </h2>
            <ul className="mt-4 space-y-2">
              {[
                "Luxury",
                "Sport Wear",
                "Men's Shoes",
                "Women's Shoes",
                "Popular Dress",
                "Gym Accessories",
                "Sport Shoes",
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-green-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Further Info */}
          <div>
            <h2 className="text-2xl font-bold border-b border-gray-600 pb-3">
              Further Info
            </h2>
            <ul className="mt-4 space-y-2">
              {["Home", "About Us", "Shop Locations", "FAQs", "Contact"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-green-400">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <ul className="flex gap-4">
            <li className="border border-gray-500 p-2 rounded-full hover:bg-green-500 hover:text-white transition">
              <a href="http://facebook.com/" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
            </li>
            <li className="border border-gray-500 p-2 rounded-full hover:bg-green-500 hover:text-white transition">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="border border-gray-500 p-2 rounded-full hover:bg-green-500 hover:text-white transition">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li className="border border-gray-500 p-2 rounded-full hover:bg-green-500 hover:text-white transition">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>

          {/* Subscribe Form */}
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-md focus:outline-none focus:border-green-500"
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
          <p>
            &copy; 2021 Company Name | Designed by{" "}
            <a
              href="https://templatemo.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400"
            >
              TemplateMo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

