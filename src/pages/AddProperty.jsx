import React, { useContext, useState } from "react";
import {
  FaHome,
  FaDollarSign,
  FaMapMarkerAlt,
  FaImage,
  FaUser,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const AddProperty = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Rent",
    price: "",
    location: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProperty = {
      ...formData,
      userName: user.displayName,
      userEmail: user.email,
      createdAt: new Date().toISOString(),
    };

    console.log("Submitted Property:", newProperty);

    // TODO: send to backend (POST API)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/properties`,
        newProperty,
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("Property Added Successfully!");
        e.target.reset(); // Reset the form
      }
    } catch (error) {
      console.error("Error adding property:", error);
      toast.error(error.response?.data?.message || "Failed to add property.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-950 shadow-xl rounded-2xl p-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
            List Your <span className="text-blue-600">Property</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Fill out the details below to reach thousands of potential buyers
            and renters.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-6 md:p-10 border border-gray-100 dark:border-gray-800 space-y-8"
        >
          {/* Property Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Property Name
            </label>
            <div className="flex items-center border rounded-lg px-3">
              <FaHome className="text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Enter property name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 outline-none bg-transparent "
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg outline-none bg-transparent"
              rows="3"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-sm font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg outline-none bg-transparent"
            >
              <option>Rent</option>
              <option>Sale</option>
              <option>Commercial</option>
              <option>Land</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 text-sm font-medium">Price</label>
            <div className="flex items-center border rounded-lg px-3">
              <FaDollarSign className="text-gray-400" />
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 text-sm font-medium">Location</label>
            <div className="flex items-center border rounded-lg px-3">
              <FaMapMarkerAlt className="text-gray-400" />
              <input
                type="text"
                name="location"
                placeholder="City, area or address"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Image Link */}
          <div>
            <label className="block mb-1 text-sm font-medium">Image URL</label>
            <div className="flex items-center border rounded-lg px-3">
              <FaImage className="text-gray-400" />
              <input
                type="text"
                name="image"
                placeholder="Paste image link"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-2 outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* User Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">
                User Name
              </label>
              <div className="flex items-center border rounded-lg px-3 bg-gray-100 dark:bg-gray-700">
                <FaUser className="text-gray-400" />
                <input
                  type="text"
                  value={user.displayName}
                  readOnly
                  className="w-full p-2 outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                User Email
              </label>
              <div className="flex items-center border rounded-lg px-3 bg-gray-100 dark:bg-gray-700">
                <FaUser className="text-gray-400" />
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full p-2 outline-none bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
