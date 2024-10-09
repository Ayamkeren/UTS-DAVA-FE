import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import ikon dari react-icons
import Navbar from "./Navbar";

const FishCart = () => {
  const [menu, setMenu] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    type: "",
    imageUrl: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle form data changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission (add or edit)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedMenu = [...menu];
      updatedMenu[editIndex] = formData; // Update existing fish
      setMenu(updatedMenu);
      setEditIndex(null); // Reset edit index
    } else {
      setMenu([...menu, formData]); // Add new fish
    }
    setFormData({ name: "", price: "", type: "", imageUrl: "" });
    setShowForm(false);
  };

  // Function to open form for editing
  const openEditForm = (index) => {
    setFormData(menu[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
		<div>
			<Navbar/>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Fish Menu</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => {
          setShowForm(true);
          setEditIndex(null); // Reset for new fish
        }}
      >
        Add Fish
      </button>

      <ul className="list-none">
        {menu.map((fish, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 p-4 mb-2 rounded"
          >
            <div>
              <h2 className="font-bold">{fish.name}</h2>
              <p>Price: {fish.price} USD</p>
              <p>Type: {fish.type}</p>
              <img
                src={fish.imageUrl}
                alt={fish.name}
                className="w-24 h-24 object-cover"
              />
            </div>
            <div className="flex">
              <button
                className="text-yellow-500 mx-2 hover:text-yellow-600"
                onClick={() => openEditForm(index)}
              >
                <FaEdit /> {/* Ikon Edit */}
              </button>
              <button
                className="text-red-500 hover:text-red-600	"
                onClick={() => setMenu(menu.filter((_, i) => i !== index))}
              >
                <FaTrash /> {/* Ikon Delete */}
              </button>
            </div>
          </li>
        ))}
      </ul>

      {showForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <form
            className="bg-white p-6 rounded shadow-md w-96" // Increased width for the form
            onSubmit={handleSubmit}
          >
            <h2 className="text-xl font-bold mb-2">
              {editIndex !== null ? "Edit Fish" : "Add Fish"}
            </h2>
            <div className="mb-4">
              <label className="block mb-1">Fish Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Price:</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Food Type:</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Image URL:</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {editIndex !== null ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default FishCart;
