import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSpinner, FaHome, FaSearch, FaSortAmountDown } from "react-icons/fa";
import PropertyCard from "../components/PropertyCard.jsx/PropertyCard";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // search and sort
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest"); // Default sort

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        // Ensure this matches your backend port (usually 5000 or 3000)
        const response = await axios.get(
          `http://localhost:3000/properties?search=${search}&sort=${sort}`,
        );
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    // Optional: Add a small delay (Debounce) for search to avoid too many API calls
    // const delayDebounceFn = setTimeout(() => {
    //   fetchProperties();
    // }, 500);

    // return () => clearTimeout(delayDebounceFn);

    fetchProperties();
  }, [search, sort]);

  // if (loading) {
  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-100">
  //       <FaSpinner className="animate-spin text-4xl text-blue-600 mb-4" />
  //       <p className="text-gray-500 font-medium">Hunting for properties...</p>
  //     </div>
  //   );
  // }

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

        {/* Search and Sort Header */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by property name..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 outline-none dark:text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <FaSortAmountDown className="text-blue-600" />
            <select
              className="w-full md:w-48 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-bold dark:text-white outline-none"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Section */}
        {loading ? (
          <div className="flex justify-center py-20">
            <FaSpinner className="animate-spin text-4xl text-blue-600" />
          </div>
        ) : properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((prop) => (
              <PropertyCard key={prop._id} property={prop} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl">
            <p className="text-gray-500 font-bold text-xl">
              No properties match your search.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSort("newest");
              }}
              className="mt-4 text-blue-600 font-bold underline"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Property Grid */}
        {/* {properties.length > 0 ? (
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
        )} */}
      </div>
    </section>
  );
};

export default AllProperties;
