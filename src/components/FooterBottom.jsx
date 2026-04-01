import React from "react";

const FooterBottom = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-400">
        {/* Brand */}
        <div className="flex items-center gap-2 font-semibold text-gray-700 dark:text-gray-200">
          <i className="fa-solid fa-film text-blue-500"></i>
          Biscope TV
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="hover:text-gray-800 dark:hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-gray-800 dark:hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-gray-800 dark:hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Biscope TV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterBottom;
