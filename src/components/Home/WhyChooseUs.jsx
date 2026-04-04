import {
  FaShieldAlt,
  FaHandshake,
  FaUserTie,
  FaSearchLocation,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const services = [
    {
      id: 1,
      icon: (
        <FaShieldAlt className="text-4xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Secure Transactions",
      description:
        "Your safety is our priority. We use industry-leading encryption and verified listings to ensure a secure experience.",
    },
    {
      id: 2,
      icon: (
        <FaSearchLocation className="text-4xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Wide Range of Properties",
      description:
        "From cozy city apartments to sprawling countryside estates, find exactly what you're looking for in our vast database.",
    },
    {
      id: 3,
      icon: <FaUserTie className="text-4xl text-blue-600 dark:text-blue-400" />,
      title: "Expert Guidance",
      description:
        "Our dedicated support team and real estate experts are available 24/7 to help you navigate your journey.",
    },
    {
      id: 4,
      icon: (
        <FaHandshake className="text-4xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Transparent Pricing",
      description:
        "No hidden fees. We believe in clear, honest communication regarding all costs and contract terms.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="text-blue-600">HomeNest?</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide a seamless and high-quality real estate experience
            tailored to your needs. Discover the benefits of working with the
            best in the industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 w-fit rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
