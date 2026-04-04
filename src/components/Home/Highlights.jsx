import { FaUsers, FaBuilding, FaAward, FaCity } from "react-icons/fa";

const Highlights = () => {
  const stats = [
    {
      id: 1,
      icon: (
        <FaBuilding className="text-4xl text-blue-600 dark:text-blue-400" />
      ),
      value: "12,000+",
      label: "Properties Listed",
      description: "From luxury villas to cozy apartments.",
    },
    {
      id: 2,
      icon: <FaUsers className="text-4xl text-blue-600 dark:text-blue-400" />,
      value: "8,500+",
      label: "Happy Clients",
      description: "Families found their dream homes with us.",
    },
    {
      id: 3,
      icon: <FaCity className="text-4xl text-blue-600 dark:text-blue-400" />,
      value: "50+",
      label: "Cities Covered",
      description: "Strategic locations across the country.",
    },
    {
      id: 4,
      icon: <FaAward className="text-4xl text-blue-600 dark:text-blue-400" />,
      value: "15+",
      label: "Years Experience",
      description: "Delivering excellence in real estate.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center group transition-all duration-300"
            >
              {/* Icon with hover animation */}
              <div className="mb-6 p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 group-hover:scale-110 group-hover:shadow-blue-500/20 group-hover:shadow-lg transition-all duration-300">
                {stat.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-50">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Divider (Optional) */}
        <div className="mt-20 border-t border-gray-200 dark:border-gray-800 max-w-4xl mx-auto opacity-50" />
      </div>
    </section>
  );
};

export default Highlights;
