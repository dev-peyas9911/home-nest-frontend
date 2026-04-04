import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Home Buyer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      comment:
        "HomeNest made finding my first apartment so easy. The 'View Details' feature gave me all the info I needed before even visiting!",
      rating: 5,
    },
    {
      id: 2,
      name: "Marcus Thompson",
      role: "Property Investor",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      comment:
        "The market statistics and categories helped me identify the best investment areas in the city. Highly recommended for professionals.",
      rating: 5,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Seller",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
      comment:
        "I listed my villa and had three serious inquiries within the first week. The platform interface is incredibly intuitive for sellers.",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-blue-600">Clients</span> Say
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Don't just take our word for it. Thousands of users trust HomeNest
            for their real estate journeys.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-4 -right-4 p-4 bg-blue-600 rounded-2xl text-white shadow-lg transform group-hover:rotate-12 transition-transform">
                <FaQuoteLeft size={20} />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < review.rating
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-700"
                    }
                    size={16}
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 italic mb-8 leading-relaxed">
                "{review.comment}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full bg-blue-50 dark:bg-gray-800 p-1 border border-gray-100 dark:border-gray-700"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white leading-none mb-1">
                    {review.name}
                  </h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-tighter">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
