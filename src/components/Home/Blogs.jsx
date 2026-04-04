import { Link } from "react-router";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for First-Time Home Buyers",
      excerpt:
        "Navigating the real estate market can be daunting. Here are the top 10 things you need to know before signing...",
      date: "Oct 12, 2025",
      author: "Admin",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      category: "Buying",
    },
    {
      id: 2,
      title: "The Rise of Eco-Friendly Smart Homes",
      excerpt:
        "Sustainability is no longer a trend; it's a lifestyle. Discover how green technology is changing modern living...",
      date: "Nov 05, 2025",
      author: "Editor",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      category: "Trends",
    },
    {
      id: 3,
      title: "How to Stage Your Home for a Fast Sale",
      excerpt:
        "First impressions are everything. Learn the professional secrets to making your property irresistible to buyers...",
      date: "Dec 01, 2025",
      author: "Expert",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      category: "Selling",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">
              Latest News
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Insights & <span className="text-blue-600">Real Estate</span>{" "}
              Advice
            </h3>
          </div>
          <Link
            to="/blogs"
            className="group flex items-center gap-2 text-gray-900 dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            View All Posts
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-blue-600" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaUser className="text-blue-600" /> {post.author}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-gray-900 dark:text-white border-b-2 border-blue-600 pb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
