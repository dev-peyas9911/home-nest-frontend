import { Link } from "react-router";
import { FaBuilding, FaHome, FaTree, FaStore } from "react-icons/fa";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Modern Apartments",
      count: "120+ Properties",
      icon: <FaBuilding />,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600",
      link: "/all-properties?category=Apartment"
    },
    {
      id: 2,
      name: "Luxury Villas",
      count: "85+ Properties",
      icon: <FaHome />,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=600",
      link: "/all-properties?category=Villa"
    },
    {
      id: 3,
      name: "Commercial Spaces",
      count: "40+ Properties",
      icon: <FaStore />,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
      link: "/all-properties?category=Commercial"
    },
    {
      id: 4,
      name: "Land & Plots",
      count: "60+ Properties",
      icon: <FaTree />,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600",
      link: "/all-properties?category=Land"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
              Browse by <span className="text-blue-600">Category</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Find the perfect property type that fits your lifestyle.
            </p>
          </div>
          <Link 
            to="/all-properties" 
            className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-2"
          >
            View All Categories <span>&rarr;</span>
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={cat.link}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Image */}
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent group-hover:from-blue-900/90 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center">
                <div className="mb-4 p-3 bg-white/20 backdrop-blur-md rounded-full text-white text-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {cat.name}
                </h3>
                <p className="text-blue-300 text-sm font-medium">
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;