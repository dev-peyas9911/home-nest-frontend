import { FaCircleNotch, FaHome } from "react-icons/fa";

const LoadingSpinner = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 bg-transparent">
      {/* Spinner Container */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Outer Pulsing Ring */}
        <div className="absolute w-20 h-20 border-4 border-blue-600/20 rounded-full animate-ping"></div>

        {/* Main Spinning Notch */}
        <FaCircleNotch className="text-6xl text-blue-600 animate-spin" />

        {/* Center Static Icon */}
        <FaHome className="absolute text-xl text-blue-600" />
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
          Finding Your <span className="text-blue-600">Dream Home...</span>
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 animate-pulse">
          Connecting to our global database
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
