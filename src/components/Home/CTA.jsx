import { Link } from "react-router";
import { FaHome, FaKey, FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: For Buyers */}
          <div className="relative overflow-hidden bg-blue-900 rounded-3xl p-8 md:p-12 group">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-6 text-white text-2xl">
                <FaHome />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4">
                Looking for a <br /> New Home?
              </h3>
              <p className="text-blue-100 mb-8 max-w-xs">
                Browse thousands of verified listings and find the perfect place
                for your family.
              </p>
              <Link
                to="/all-properties"
                className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95"
              >
                Browse Properties <FaArrowRight />
              </Link>
            </div>
            {/* Decorative Background Icon */}
            <FaHome className="absolute -bottom-10 -right-10 text-[15rem] text-white/10 rotate-12 pointer-events-none transition-transform group-hover:rotate-0 duration-700" />
          </div>

          {/* Card 2: For Sellers */}
          <div className="relative overflow-hidden bg-gray-900 dark:bg-gray-800 rounded-3xl p-8 md:p-12 group border border-transparent dark:border-gray-700">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-2xl mb-6 text-white text-2xl shadow-lg shadow-blue-600/30">
                <FaKey />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4">
                Want to Sell <br /> Your Property?
              </h3>
              <p className="text-gray-400 mb-8 max-w-xs">
                List your property for free and reach millions of potential
                buyers in just a few clicks.
              </p>
              <Link
                to="/add-property"
                className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95"
              >
                List Your Property <FaArrowRight />
              </Link>
            </div>
            {/* Decorative Background Icon */}
            <FaKey className="absolute -bottom-10 -right-10 text-[15rem] text-white/5 -rotate-12 pointer-events-none transition-transform group-hover:rotate-0 duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
