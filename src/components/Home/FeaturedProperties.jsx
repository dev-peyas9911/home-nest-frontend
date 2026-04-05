import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { FaArrowRight, FaSpinner } from "react-icons/fa";
import PropertyCard from "../PropertyCard.jsx/PropertyCard";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        // Calling our specific "featured" endpoint
        const response = await axios.get(
          "http://localhost:3000/featured-properties",
        );
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching featured properties:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <FaSpinner className="animate-spin text-4xl text-blue-600" />
      </div>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with "See All" Link */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">
              New Arrivals
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
              Featured <span className="text-blue-600">Properties</span>
            </h3>
          </div>
          <Link
            to="/all-properties"
            className="group flex items-center gap-2 text-gray-900 dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            See All Properties
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Grid Displaying exactly 6 (or fewer if DB is small) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>

        {/* Optional: Centered CTA if you have no header link */}
        <div className="mt-16 text-center">
          <Link
            to="/all-properties"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold
             py-4 px-10 rounded-2xl shadow-lg shadow-blue-600/20 transition-all transform hover:scale-105"
          >
            Explore More Real Estate
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
