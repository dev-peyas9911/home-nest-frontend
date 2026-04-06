import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  FaMapMarkerAlt,
  FaTag,
  FaEdit,
  FaTimes,
  FaTrash,
  FaEye,
  FaSpinner,
  FaPlus,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const MyProperties = () => {
  const { user } = useContext(AuthContext);
  const [myProperties, setMyProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  // update with modal
  const [selectedProperty, setSelectedProperty] = useState(null); // Holds property to edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updating, setUpdating] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMyProperties = async () => {
      try {
        setLoading(true);
        // Passing the email as a query parameter
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/my-properties?email=${user.email}`,
        );
        setMyProperties(response.data);
      } catch (err) {
        console.error("Error fetching my properties:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) fetchMyProperties();
  }, [user.email]);

  // Function to open modal with data
  const handleEditClick = (prop) => {
    setSelectedProperty(prop);
    setIsModalOpen(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);

    const form = e.target;
    const updatedData = {
      name: form.propertyName.value,
      description: form.description.value,
      category: form.category.value,
      price: form.price.value,
      location: form.location.value,
      image: form.image.value,
    };

    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/properties/${selectedProperty._id}`,
        updatedData,
      );

      if (res.data.modifiedCount > 0) {
        toast.success("Property Updated Successfully!");
        setIsModalOpen(false);
        // Navigate to details page to see changes immediately
        navigate(`/properties/${selectedProperty._id}`);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update property.");
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this property listing!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      background: document.documentElement.classList.contains('dark') ? '#111827' : '#fff',
      color: document.documentElement.classList.contains('dark') ? '#fff' : '#000',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`${import.meta.env.VITE_API_URL}/properties/${id}`);
          
          if (res.data.deletedCount > 0) {
            // --- INSTANT UI UPDATE ---
            // Filter out the deleted property from the state
            const remaining = myProperties.filter(prop => prop._id !== id);
            setMyProperties(remaining);

            Swal.fire({
              title: "Deleted!",
              text: "Your property has been removed.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false
            });
          }
        } catch (err) {
          console.error(err);
          Swal.fire("Error!", "Something went wrong while deleting.", "error");
        }
      }
    });
  };

  // if (loading) {
  //   return (
  //     // <div className="min-h-screen flex items-center justify-center">
  //     //   <FaSpinner className="animate-spin text-4xl text-blue-600" />
  //     // </div>
  //     <LoadingSpinner></LoadingSpinner>
  //   );
  // }
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 dark:text-white">
              My <span className="text-blue-600">Properties</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              You have listed {myProperties.length} properties so far.
            </p>
          </div>
          <Link
            to="/add-property"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20"
          >
            <FaPlus /> Add New Property
          </Link>
        </div>

        {/* Properties Grid */}
        {
          loading ? <LoadingSpinner></LoadingSpinner> : 
          myProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProperties.map((prop) => (
              <div
                key={prop._id}
                className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all group"
              >
                {/* Image & Price Tag */}
                <div className="relative h-48">
                  <img
                    src={prop.image}
                    alt={prop.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-3 py-1 rounded-lg text-blue-600 font-bold text-sm">
                    ${prop.price?.toLocaleString()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-tighter mb-2">
                    <FaTag size={10} /> {prop.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {prop.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 mb-4">
                    <FaMapMarkerAlt /> {prop.location}
                  </p>

                  <div className="text-[10px] text-gray-400 dark:text-gray-500 mb-6 uppercase font-bold tracking-widest">
                    Posted on: {prop.createdAt}{" "}
                    {/* Replace with real date if available */}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-50 dark:border-gray-800">
                    <button
                      title="Update"
                      onClick={() => handleEditClick(prop)}
                      className="flex items-center justify-center p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all"
                    >
                      <FaEdit />
                    </button>
                    {/* --- UPDATE MODAL --- */}
                    {isModalOpen && selectedProperty && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <div className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                          {/* Modal Header */}
                          <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800">
                            <h2 className="text-xl font-black text-gray-900 dark:text-white">
                              Update Property
                            </h2>
                            <button
                              onClick={() => setIsModalOpen(false)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <FaTimes size={24} />
                            </button>
                          </div>

                          {/* Modal Body / Form */}
                          <form
                            onSubmit={handleUpdate}
                            className="p-8 space-y-5 max-h-[70vh] overflow-y-auto"
                          >
                            {/* Read-Only Info */}
                            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl mb-4">
                              <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase">
                                  Owner
                                </p>
                                <p className="text-sm font-semibold dark:text-white">
                                  {selectedProperty.userName}
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase">
                                  Email
                                </p>
                                <p className="text-sm font-semibold dark:text-white">
                                  {selectedProperty.userEmail}
                                </p>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                  Property Name
                                </label>
                                <input
                                  name="propertyName"
                                  defaultValue={selectedProperty.name}
                                  required
                                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 dark:text-white"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                  Category
                                </label>
                                <select
                                  name="category"
                                  defaultValue={selectedProperty.category}
                                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 dark:text-white"
                                >
                                  <option value="Rent">Rent</option>
                                  <option value="Sale">Sale</option>
                                  <option value="Commercial">Commercial</option>
                                  <option value="Land">Land</option>
                                </select>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                  Price ($)
                                </label>
                                <input
                                  name="price"
                                  type="number"
                                  defaultValue={selectedProperty.price}
                                  required
                                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 dark:text-white"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                  Location
                                </label>
                                <input
                                  name="location"
                                  defaultValue={selectedProperty.location}
                                  required
                                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 dark:text-white"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                Image Link
                              </label>
                              <input
                                name="image"
                                defaultValue={selectedProperty.image}
                                required
                                className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 dark:text-white"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                Description
                              </label>
                              <textarea
                                name="description"
                                defaultValue={selectedProperty.description}
                                rows="3"
                                className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 dark:text-white"
                              ></textarea>
                            </div>

                            <button
                              type="submit"
                              disabled={updating}
                              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                            >
                              {updating ? (
                                <FaSpinner className="animate-spin" />
                              ) : (
                                "Update Property"
                              )}
                            </button>
                          </form>
                        </div>
                      </div>
                    )}
                    <button
                      title="Delete"
                      onClick={() => handleDelete(prop._id)}
                      className="flex items-center justify-center p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-600 hover:text-white transition-all"
                    >
                      <FaTrash />
                    </button>
                    <Link
                      to={`/properties/${prop._id}`}
                      title="View Details"
                      className="flex items-center justify-center p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900 hover:text-white transition-all"
                    >
                      <FaEye />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              You haven't listed any properties yet.
            </p>
          </div>
        )
        }
      </div>
    </div>
  );
};

export default MyProperties;
