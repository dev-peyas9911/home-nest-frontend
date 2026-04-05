import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { FaMapMarkerAlt, FaTag, FaEdit, FaTrash, FaEye, FaSpinner, FaPlus } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const MyProperties = () => {
  const { user } = useContext(AuthContext);
  const [myProperties, setMyProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMyProperties = async () => {
      try {
        setLoading(true);
        // Passing the email as a query parameter
        const response = await axios.get(
          `http://localhost:3000/my-properties?email=${user.email}`,
        );
        setMyProperties(response.data);
      } catch (err) {
        console.error("Error fetching my properties:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) fetchMyProperties();
  }, [user.email]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-blue-600" />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 dark:text-white">
              My <span className="text-blue-600">Properties</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              You have listed {myProperties.length} properties so far.
            </p>
          </div>
          <Link
            to="/add-property"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20"
          >
            <FaPlus /> Add New Property
          </Link>
        </div>

        {/* Properties Grid */}
        {myProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProperties.map((prop) => (
              <div
                key={prop._id}
                className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all group"
              >
                {/* Image & Price Tag */}
                <div className="relative h-48">
                  <img
                    src={prop.image}
                    alt={prop.propertyName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-3 py-1 rounded-lg text-blue-600 font-bold text-sm">
                    ${prop.price?.toLocaleString()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-tighter mb-2">
                    <FaTag size={10} /> {prop.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {prop.propertyName}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 mb-4">
                    <FaMapMarkerAlt /> {prop.location}
                  </p>

                  <div className="text-[10px] text-gray-400 dark:text-gray-500 mb-6 uppercase font-bold tracking-widest">
                    Posted on: Oct 15, 2025{" "}
                    {/* Replace with real date if available */}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-50 dark:border-gray-800">
                    <button
                      title="Update"
                      className="flex items-center justify-center p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all"
                    >
                      <FaEdit />
                    </button>
                    <button
                      title="Delete"
                      className="flex items-center justify-center p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-600 hover:text-white transition-all"
                    >
                      <FaTrash />
                    </button>
                    <Link
                      to={`/properties/${prop._id}`}
                      title="View Details"
                      className="flex items-center justify-center p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900 hover:text-white transition-all"
                    >
                      <FaEye />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              You haven't listed any properties yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProperties;
