const AboutIntro = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div>
        <span className="text-teal-600 font-semibold uppercase text-sm">LUXURY HOTEL</span>
        <h2 className="text-4xl font-bold text-gray-900 my-4">We Provide Outdoor Activities To All Visitors</h2>
        <p className="text-gray-600 mb-6">
          There are many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or randomised words
          which don't look even slightly believable.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <i className="fas fa-swimmer text-teal-500 text-3xl mt-1"></i>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">The Best Swimming Pool</h3>
              <p className="text-gray-600 text-sm">Lorem Ipsum is simply dummy of the printing and industry.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <i className="fas fa-biking text-teal-500 text-3xl mt-1"></i>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">The Best Mountainary Bike</h3>
              <p className="text-gray-600 text-sm">Lorem Ipsum is simply dummy of the printing and industry.</p>
            </div>
          </div>
        </div>
        <a href="#" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-semibold inline-flex items-center transition-colors">
          Discover More <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
      
      {/* Right Image Composite */}
      <div className="relative h-[450px] mt-12 md:mt-0">
        <img src="https://placehold.co/600x450/ddd/666?text=Fireplace+View" alt="Hotel Interior" className="w-full h-full object-cover rounded-lg shadow-lg" />
        <div className="absolute -bottom-16 -right-10 md:-right-16 bg-white p-6 rounded-lg shadow-xl w-64 text-center border">
          <img src="https://placehold.co/200x130/eee/777?text=Restaurant" alt="Restaurant" className="rounded-md mb-4 mx-auto" />
          <h4 className="text-3xl font-bold text-gray-900">10+</h4>
          <p className="text-gray-800 font-semibold">Restaurants</p>
          <p className="text-xs text-gray-500 mt-2">Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutIntro;