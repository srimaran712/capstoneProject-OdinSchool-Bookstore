import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <p className="text-sm">
            Welcome to our book store! We offer a wide range of books from fiction to non-fiction, educational to entertainment. Our goal is to provide the best reading experience for book lovers.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/books" className="hover:text-white">Books</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; 2024 BookStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;