import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaStar,
  FaQuoteLeft,
  FaUserCircle,
  FaRegSmileBeam,
} from "react-icons/fa";

const PropertyReviews = ({ propertyId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/reviews/${propertyId}`,
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error loading reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) fetchReviews();
  }, [propertyId]);

  if (loading)
    return (
      <div className="animate-pulse text-gray-400">Loading feedback...</div>
    );

  return (
    <div className="mt-16 border-t border-gray-100 dark:border-gray-800 pt-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-black text-gray-900 dark:text-white">
            What People <span className="text-blue-600">Say</span>
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {reviews.length} Verified Reviews
          </p>
        </div>
        {reviews.length > 0 && (
          <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-600 px-4 py-2 rounded-full text-sm font-bold">
            <FaRegSmileBeam /> 98% Satisfaction
          </div>
        )}
      </div>

      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-3xl border border-transparent hover:border-blue-200 dark:hover:border-blue-900 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                  <FaUserCircle size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-none">
                    {review.reviewerName}
                  </h4>
                  <div className="flex text-yellow-400 text-xs mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < review.starRating
                            ? "fill-current"
                            : "text-gray-300 dark:text-gray-700"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <FaQuoteLeft className="absolute -top-1 -left-1 text-blue-600/10 text-2xl" />
                <p className="text-gray-600 dark:text-gray-300 text-sm italic line-clamp-3 pl-4">
                  {review.reviewText}
                </p>
              </div>

              <p className="text-[10px] text-gray-400 mt-4 uppercase font-bold tracking-widest">
                {review.reviewDate}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl text-center border border-blue-100 dark:border-blue-900/30">
          <p className="text-blue-600 dark:text-blue-400 font-medium italic">
            Be the first to review this stunning property!
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyReviews;
