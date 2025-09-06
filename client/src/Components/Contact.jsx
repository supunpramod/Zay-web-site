"use client";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaSearch } from "react-icons/fa";

function MapSection() {
  const position = [-23.013104, -43.394365];


  

  return (
    <div className="w-full h-[300px] z-0">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full rounded-md shadow-md z-0 "
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <b>Zay</b> eCommerce Template <br /> Location.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:3000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // clear form
      } else {
        setStatus("❌ " + data.error);
      }
    } catch (err) {
      setStatus("❌ Something went wrong!");
    }
  };



  return (
    <div>
      {/* Search Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg relative p-6">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            <form className="mt-6">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search ..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="px-4 bg-green-600 text-white rounded-r-md hover:bg-green-500 flex items-center"
                >
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="bg-gray-100 py-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            Proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <MapSection />

      {/* Contact Form */}
     <div className="container mx-auto py-12 px-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="text-right mt-6">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-500 transition"
          >
            Let’s Talk
          </button>
        </div>

        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
      </form>
    </div>

      {/* Floating Search Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-500 transition"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
