import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300">
    <div className="container mx-auto max-w-7xl px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <Link to="/" className="text-3xl font-bold text-white mb-4 block">Fixyland</Link>
          <p className="text-sm mb-6">
            Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center text-white transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center text-white transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center text-white transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center text-white transition-colors"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        
        {/* Explore */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-6">EXPLORE</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-teal-500 hover:pl-2 transition-all duration-300">About Us</Link></li>
            <li><a href="#" className="hover:text-teal-500 hover:pl-2 transition-all duration-300">Hotel Staff</a></li>
            <li><a href="#" className="hover:text-teal-500 hover:pl-2 transition-all duration-300">Services</a></li>
            <li><a href="#" className="hover:text-teal-500 hover:pl-2 transition-all duration-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-6">CONTACT</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <i className="fas fa-map-marker-alt text-teal-500 mt-1"></i>
              <span>123 Street, New York, USA</span>
            </li>
            <li className="flex items-start space-x-3">
              <i className="fas fa-phone text-teal-500 mt-1"></i>
              <span>(12) 987 654 3210</span>
            </li>
            <li className="flex items-start space-x-3">
              <i className="fas fa-envelope text-teal-500 mt-1"></i>
              <span>info@fixyland.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-6">NEWSLETTER</h4>
          <p className="text-sm mb-4">Subscribe our newsletter to get our latest update & news.</p>
          <form className="relative">
            <input type="email" placeholder="Your email address" className="w-full bg-gray-700 text-white rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400" />
            <button type="submit" className="absolute right-1 top-1 bg-teal-500 hover:bg-teal-600 text-white w-10 h-10 rounded-md flex items-center justify-center transition-colors">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
          <div className="flex items-center mt-4">
            <input type="checkbox" id="terms" className="h-4 w-4 text-teal-500 bg-gray-700 border-gray-600 rounded focus:ring-teal-500" />
            <label htmlFor="terms" className="ml-2 text-sm">I agree to all terms and policies</label>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-gray-700 text-sm flex flex-col md:flex-row justify-between items-center text-center">
        <p className="text-gray-400">&copy; Copyright 2025 Fixyland. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-teal-500">Terms and Conditions</a>
          <a href="#" className="hover:text-teal-500">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;