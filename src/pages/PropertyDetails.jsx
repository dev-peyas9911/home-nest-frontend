import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaTag,
  FaDollarSign,
  FaCalendarAlt,
  FaUser,
  FaStar,
  FaRegStar,
  FaSpinner,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import PropertyReviews from "../components/PropertyReviews/PropertyReviews";

const PropertyDetails = () => {
    const {user} = useContext(AuthContext);
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  const [userRating, setUserRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/properties/${id}`,
        );
        setProperty(response.data);
      } catch (err) {
        console.error("Error fetching details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  // Reviews section
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!reviewText.trim()) return alert("Please enter a short review.");

    setIsSubmitting(true);

    // 2. Prepare the payload as per your requirements
    const reviewData = {
      reviewerName: user.displayName,
      reviewerEmail: user.email,
      propertyId: property._id,
      propertyName: property.name,
      propertyThumbnail: property.image, // Thumbnail from the property object
      starRating: userRating,
      reviewText: reviewText,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/reviews`,
        reviewData,
      );

      if (response.data.insertedId) {
        toast.success("Thank you! Your review has been saved.");
        // 3. Clear form after successful DB save
        setReviewText("");
        setUserRating(5);
      }
    } catch (err) {
      console.error("Database Error:", err);
      toast.error("Failed to save review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-blue-600" />
      </div>
    );
  if (!property)
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Property not found!
      </div>
    );

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen pb-20 transition-colors duration-300">
      {/* 1. Hero Image Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <img
          src={property.image}
          alt={property.propertyName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-10 left-0 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span
              className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase 
            tracking-widest mb-4 inline-block"
            >
              {property.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              {property.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* 2. Main Content (Left) */}
        <div className="lg:col-span-2 space-y-12">
          {/* Details Card */}
          <div
            className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100
           dark:border-gray-800"
          >
            <div className="flex flex-wrap items-center justify-between gap-6 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-2xl">
                  <FaDollarSign size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">
                    Price
                  </p>
                  <p className="text-2xl font-black text-gray-900 dark:text-white">
                    ${property.price?.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">
                    Location
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {property.location}
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Description
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              {property.description}
            </p>
          </div>

          {/* Reviews */}
          <PropertyReviews propertyId={property._id}></PropertyReviews>

          {/* 3. Ratings & Reviews Section */}
          <div
            className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100
           dark:border-gray-800"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Ratings & Reviews
            </h3>

            {/* Review Form */}
            <form
              onClick={handleReviewSubmit}
              className="mb-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl"
            >
              <p className="font-bold text-gray-700 dark:text-gray-300 mb-4">
                Leave a Review
              </p>
              <div className="flex gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setUserRating(star)}
                    className="text-2xl transition-transform active:scale-90"
                  >
                    {star <= userRating ? (
                      <FaStar className="text-yellow-400" />
                    ) : (
                      <FaRegStar className="text-gray-400" />
                    )}
                  </button>
                ))}
              </div>
              <textarea
                rows="4"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Share your thoughts on this property..."
                className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white
                 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              ></textarea>
              <button className="mt-4 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
                Post Review
              </button>
            </form>

            {/* Mock Reviews List */}
            <div className="space-y-6">
              <p className="text-sm text-gray-500 italic">
                No reviews yet. Be the first to rate this property!
              </p>
            </div>
          </div>
        </div>

        {/* 4. Sidebar (Right) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Posted By Card */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">
                Posted By
              </h4>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {property.userName?.charAt(0)}
                </div>
                <div>
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                    {property.userName}
                  </h5>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <FaUser size={12} /> Property Owner
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <FaCalendarAlt className="text-blue-600" />
                  <span className="text-sm font-medium">
                    {property.createdAt}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <FaTag className="text-blue-600" />
                  <span className="text-sm font-medium">
                    {property.userEmail}
                  </span>
                </div>
              </div>
              <button className="w-full mt-8 py-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white font-bold rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
