// import { useState, useEffect } from "react";
// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3000"; // backend URL

// export default function Shopmanage() {
//   const [products, setProducts] = useState([]);
//   const [editProduct, setEditProduct] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     category: "Men",
//     rating: 0,
//   });
//   const [img, setImg] = useState(null);

//   // Fetch products
//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("/api/products");
//       setProducts(res.data);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Handle form change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       Object.entries(formData).forEach(([key, value]) => data.append(key, value));
//       if (img) data.append("img", img);

//       if (editProduct) {
//         await axios.put(`/api/products/${editProduct._id}`, data);
//       } else {
//         await axios.post("/api/products", data);
//       }
//       setFormData({ name: "", price: "", category: "Men", rating: 0 });
//       setImg(null);
//       setEditProduct(null);
//       fetchProducts();
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//     }
//   };

//   // Edit product
//   const handleEdit = (product) => {
//     setEditProduct(product);
//     setFormData({
//       name: product.name,
//       price: product.price,
//       category: product.category,
//       rating: product.rating,
//     });
//     setImg(null);
//   };

//   // Delete product
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure?")) return;
//     try {
//       await axios.delete(`/api/products/${id}`);
//       fetchProducts();
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-2xl font-bold mb-4">🛒 Shop Products</h1>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md space-y-3 mb-6">
//         <input
//           type="text"
//           name="name"
//           placeholder="Product Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="border p-2 w-full"
//           required
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={formData.price}
//           onChange={handleChange}
//           className="border p-2 w-full"
//           required
//         />
//         <select
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         >
//           <option>Men</option>
//           <option>Women</option>
//           <option>Bag</option>
//           <option>Sweater</option>
//           <option>Sunglass</option>
//         </select>
//         <input
//           type="number"
//           name="rating"
//           placeholder="Rating"
//           value={formData.rating}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         />
//         <input type="file" onChange={(e) => setImg(e.target.files[0])} />
//         <button className="bg-blue-500 text-white px-4 py-2 rounded">
//           {editProduct ? "Update" : "Add"} Product
//         </button>
//       </form>

//       {/* Products List */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product._id} className="border rounded-lg p-4 shadow-md flex flex-col items-center">
//             {product.img && (
//               <img
//                 src={`http://localhost:5000/uploads/${product.img}`}
//                 alt={product.name}
//                 className="w-32 h-32 object-cover mb-2"
//               />
//             )}
//             <h3 className="font-bold">{product.name}</h3>
//             <p>${product.price}</p>
//             <p className="text-sm text-gray-500">{product.category}</p>
//             <p>⭐ {product.rating}</p>
//             <div className="flex gap-2 mt-2">
//               <button
//                 onClick={() => handleEdit(product)}
//                 className="bg-yellow-500 text-white px-2 py-1 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(product._id)}
//                 className="bg-red-500 text-white px-2 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000"; // backend URL

export default function Shopmanage() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Men",
    rating: 0,
  });
  const [img, setImg] = useState(null);

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      if (img) data.append("img", img);

      if (editProduct) {
        await axios.put(`/api/products/${editProduct._id}`, data);
      } else {
        await axios.post("/api/products", data);
      }
      setFormData({ name: "", price: "", category: "Men", rating: 0 });
      setImg(null);
      setEditProduct(null);
      fetchProducts();
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  // Edit product
  const handleEdit = (product) => {
    setEditProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      rating: product.rating,
    });
    setImg(null);
  };

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await axios.delete(`/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Shop Products</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md space-y-3 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option>Men</option>
          <option>Women</option>
          <option>Bag</option>
          <option>Sweater</option>
          <option>Sunglass</option>
        </select>
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input type="file" onChange={(e) => setImg(e.target.files[0])} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          {editProduct ? "Update" : "Add"} Product
        </button>
      </form>

      {/* Products List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg p-4 shadow-md flex flex-col items-center">
            {product.img && (
              <img
                // Fixed the image source URL
                src={`http://localhost:3000/uploads/${product.img}`}
                alt={product.name}
                className="w-32 h-32 object-cover mb-2"
              />
            )}
            <h3 className="font-bold">{product.name}</h3>
            <p>${product.price}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p>⭐ {product.rating}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(product)}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}