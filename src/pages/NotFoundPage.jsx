import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-xl p-8 text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-4">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;