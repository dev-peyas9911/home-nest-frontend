import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSpinner, FaHome } from "react-icons/fa";
import PropertyCard from "../components/PropertyCard.jsx/PropertyCard";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        // Ensure this matches your backend port (usually 5000 or 3000)
        const response = await axios.get("http://localhost:3000/properties");
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100">
        <FaSpinner className="animate-spin text-4xl text-blue-600 mb-4" />
        <p className="text-gray-500 font-medium">Hunting for properties...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    );
  }
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
            Featured <span className="text-blue-600">Real Estate</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Explore our curated list of top-tier properties across the country.
          </p>
        </div>

        {/* Property Grid */}
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-3xl border-2 border-dashed
           border-gray-200 dark:border-gray-700"
          >
            <FaHome className="mx-auto text-5xl text-gray-300 mb-4" />
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">
              No properties found in the database.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProperties;
