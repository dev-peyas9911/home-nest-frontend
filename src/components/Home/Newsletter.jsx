import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Logic for subscription will go here later
    alert("Thank you for subscribing to HomeNest!");
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-blue-600 dark:bg-blue-900 rounded-3xl shadow-2xl">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500 rounded-full opacity-20 transform rotate-45"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-400 rounded-full opacity-20"></div>

          <div className="relative px-8 py-12 md:px-16 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Don't Miss Your <br />
                <span className="text-blue-200">Dream Property</span>
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-md mx-auto lg:mx-0">
                Subscribe to our newsletter and be the first to receive the
                latest listings, market trends, and exclusive real estate deals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-white/90 text-sm font-medium">
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-200" /> Weekly Updates
                </span>
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-200" /> No Spam
                </span>
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-200" /> Unsubscribe
                  Anytime
                </span>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:w-5/12 w-full">
              <form
                onSubmit={handleSubscribe}
                className="bg-white dark:bg-gray-900 p-2 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center gap-2 transition-colors duration-300"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-transparent text-gray-900 dark:text-white focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all active:scale-95 whitespace-nowrap"
                >
                  <FaPaperPlane size={14} />
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-xs text-blue-100 text-center lg:text-left opacity-80">
                By subscribing, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
