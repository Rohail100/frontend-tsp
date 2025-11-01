import { FormInput, FormSelect, FormDateInput } from "../common/Form";

const BookingForm = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto max-w-7xl px-4">
      <div className="text-center mb-16">
        <span className="text-teal-600 font-semibold uppercase text-sm">STAY WITH US</span>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">Make An Appointment</h2>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Form */}
        <form className="lg:col-span-2 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <FormInput placeholder="Ex. first name" />
            <FormInput placeholder="Ex. last name" />
            <FormInput placeholder="Ex. info@domain.com" />
            <FormInput placeholder="Ex. +1 987 654 3210" />
            <FormSelect>
              <option>Select Type</option>
              <option>Single</option>
              <option>Double</option>
              <option>Suite</option>
            </FormSelect>
            <FormSelect>
              <option>Select Room</option>
              <option>Room 101</option>
              <option>Room 102</option>
              <option>Room 103</option>
            </FormSelect>
            <FormDateInput placeholder="Check in" />
            <FormDateInput placeholder="Check out" />
          </div>
          <textarea
            placeholder="Ex. type message"
            rows="5"
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-semibold inline-flex items-center transition-colors"
          >
            Book Appointment <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </form>
        
        {/* Info Card */}
        <div className="lg:col-span-1 bg-teal-500 text-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
          <img 
            src="https://placehold.co/600x400/eee/777?text=Hotel+Room" 
            alt="Hotel Room" 
            className="rounded-lg mb-6 w-full"
          />
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-phone text-3xl"></i>
          </div>
          <h3 className="text-3xl font-bold mb-2">(+1) 987 654 3210</h3>
          <p className="mb-1">Mon-Fri: 7:00 AM - 9:00 PM</p>
          <p className="mb-6">Sat-Sun: 9:00 AM - 7:00 PM</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-md font-semibold inline-flex items-center transition-colors">
            Call Us Now <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default BookingForm;