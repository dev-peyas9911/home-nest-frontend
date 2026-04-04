import { Link } from "react-router";
import { FaMapMarkerAlt, FaTag } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  // Destructuring property data (Mock or from MongoDB)
  const { _id, propertyName, category, description, location, price, image } =
    property;

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
      {/* Property Image & Category Badge */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000"
          }
          alt={propertyName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 uppercase tracking-wider">
            <FaTag size={10} />
            {category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <p className="bg-blue-600 text-white font-bold px-4 py-1 rounded-full shadow-lg">
            ${price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {propertyName}
        </h3>

        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
          <FaMapMarkerAlt className="mr-1.5 text-red-500" />
          <span className="line-clamp-1">{location}</span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>

        {/* Action Button - Pushed to bottom */}
        <div className="mt-auto">
          <Link
            to={`/property/${_id}`}
            className="block w-full text-center bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-900 dark:text-white hover:text-white dark:hover:text-white font-semibold py-3 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-600 transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
