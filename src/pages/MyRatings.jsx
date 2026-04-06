import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  FaStar,
  FaCalendarAlt,
  FaHome,
  FaSpinner,
  FaQuoteLeft,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const MyRatings = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock Logged-in User (Replace with your Auth Context)
//   const user = { email: "peyas0024@gmail.com" };
const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchMyReviews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/reviews?email=${user.email}`,
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) fetchMyReviews();
  }, [user.email]);

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <FaSpinner className="animate-spin text-4xl text-blue-600" />
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white">
            My <span className="text-blue-600">Reviews & Ratings</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Manage the feedback you've shared about properties.
          </p>
        </div>

        {/* Reviews Grid */}
        {loading ? <LoadingSpinner></LoadingSpinner> : reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col"
              >
                {/* Property Thumbnail Header */}
                <div className="relative h-40">
                  <img
                    src={review.propertyThumbnail}
                    alt={review.propertyName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <h3 className="text-white font-bold text-lg line-clamp-1 flex items-center gap-2">
                      <FaHome className="text-blue-400" /> {review.propertyName}
                    </h3>
                  </div>
                </div>

                {/* Review Content */}
                <div className="p-6 grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Rating
                      </p>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < review.starRating
                                ? "text-yellow-400"
                                : "text-gray-200 dark:text-gray-700"
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Date
                      </p>
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 flex
                       items-center gap-1 mt-1">
                        <FaCalendarAlt size={10} /> {review.reviewDate}
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <FaQuoteLeft
                      className="absolute -top-2 -left-2 text-blue-100 dark:text-blue-900/30
                     text-3xl z-0"
                    />
                    <p className="relative z-10 text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      "{review.reviewText}"
                    </p>
                  </div>
                </div>

                {/* Footer Info */}
                <div
                  className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100
                 dark:border-gray-800"
                >
                  <p className="text-xs text-gray-500">
                    Reviewed as{" "}
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      {review.reviewerName}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border-2 border-dashed
           border-gray-200 dark:border-gray-700"
          >
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              You haven't written any reviews yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRatings;
