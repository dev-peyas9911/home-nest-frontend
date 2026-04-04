import { Link } from "react-router";
import {
  FaArrowUp,
  FaChartLine,
  FaRegHandshake,
  FaGlobeAmericas,
} from "react-icons/fa";

const Statistics = () => {
  const marketStats = [
    {
      id: 1,
      label: "Annual Growth",
      value: "24%",
      icon: <FaArrowUp className="text-green-500" />,
      description: "Increase in property value over the last 12 months.",
      color: "border-green-500",
    },
    {
      id: 2,
      label: "Market Reach",
      value: "1.2M",
      icon: <FaGlobeAmericas className="text-blue-500" />,
      description: "Monthly active users searching for their next home.",
      color: "border-blue-500",
    },
    {
      id: 3,
      label: "Avg. Sale Time",
      value: "18 Days",
      icon: <FaChartLine className="text-purple-500" />,
      description: "Fastest turnaround time for property closings.",
      color: "border-purple-500",
    },
    {
      id: 4,
      label: "Successful Deals",
      value: "45K+",
      icon: <FaRegHandshake className="text-orange-500" />,
      description: "Verified transactions completed through our portal.",
      color: "border-orange-500",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout: Text on Left, Stats on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content (4 Columns) */}
          <div className="lg:col-span-5">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
              Our Impact in Numbers
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Leading the <span className="text-blue-600">Real Estate</span>{" "}
              Digital Revolution.
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              HomeNest isn't just a listing portal; we are a data-driven
              ecosystem. We provide real-time market analytics to help you make
              the most informed investment decisions.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all shadow-xl"
            >
              Join Our Community
            </Link>
          </div>

          {/* Stats Cards (7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketStats.map((stat) => (
              <div
                key={stat.id}
                className={`p-8 bg-gray-50 dark:bg-gray-800/50 border-l-4 ${stat.color} rounded-xl shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-inner">
                    {stat.icon}
                  </span>
                  <span className="text-3xl font-black text-gray-900 dark:text-white">
                    {stat.value}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {stat.label}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
