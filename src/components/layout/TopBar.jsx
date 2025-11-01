const TopBar = () => (
  <div className="bg-gray-900 text-gray-300 text-sm py-2">
    <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center px-4">
      <div className="flex space-x-4">
        <span><i className="fas fa-phone text-teal-500 mr-1"></i> (12) 987 654 3210</span>
        <span><i className="fas fa-envelope text-teal-500 mr-1"></i> info@fixyland.com</span>
      </div>
      <div className="flex space-x-3 mt-2 md:mt-0">
        <a href="#" className="hover:text-teal-500"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-teal-500"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-teal-500"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-teal-500"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
);

export default TopBar;