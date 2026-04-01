import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-8xl font-bold text-gray-200 dark:text-gray-700">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>

      <a
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
