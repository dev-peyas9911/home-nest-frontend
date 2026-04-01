import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Updated X logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <Link
              to="/"
              className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight"
            >
              Home<span className="text-blue-600 dark:text-blue-500">Nest</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Your trusted partner in finding the perfect place to call home. We
              connect buyers, sellers, and renters with premium real estate
              opportunities.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-6 uppercase text-sm tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-properties"
                  className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  All Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Contact Details */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-6 uppercase text-sm tracking-wider">
              Contact Details
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-blue-600 dark:text-blue-500" />
                <span className="text-gray-600 dark:text-gray-300">
                  123 Realty Plaza, Suite 500
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-600 dark:text-blue-500" />
                <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600 dark:text-blue-500" />
                <span className="text-gray-600 dark:text-gray-300">support@homenest.com</span>
              </li>
            </ul>
          </div>

          {/* 4. Support & Legal */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-6 uppercase text-sm tracking-wider">
              Support
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Help & FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-500 dark:text-gray-500">
          <p>
            © {currentYear} HomeNest Real Estate Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;