import { useState } from "react";
import { FormInput, FormSelect, FormDateInput } from "../common/Form";
import { post } from "../../services/api";

const BookingForm = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto max-w-7xl px-4">
      <div className="text-center mb-16">
        <span className="text-teal-600 font-semibold uppercase text-sm">STAY WITH US</span>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">Make An Appointment</h2>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Form */}
        <Form />
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

const Form = () => {
    const [form, setForm] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      type: "",
      room: "",
      checkIn: "",
      checkOut: "",
      message: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (field) => (e) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const required = ["firstName", "lastName", "email", "phone", "type", "room", "checkIn", "checkOut"];
      const missing = required.filter((key) => {
        const v = form[key];
        return v === undefined || v === null || String(v).trim() === "";
      });
      if (missing.length) {
        setErrorMessage(`Please fill required fields: ${missing.join(", ")}`);
        return;
      }

      const checkIn = new Date(form.checkIn).toISOString();
      const checkOut = new Date(form.checkOut).toISOString();

      post("/appointments", { checkIn, checkOut, ...form })
        .then((res) => {
          setSuccessMessage("Booking form submitted successfully!");
          setErrorMessage("");
        })
        .catch((err) => {
          setErrorMessage("Booking submission failed. Please try again.");
        });

      return;
    };

    return (
      <form className="lg:col-span-2 space-y-6" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-6">
          <FormInput
            labelName="First Name"
            placeholder="Ex. first name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange("firstName")}
          />
          <FormInput
            labelName="Last Name"
            placeholder="Ex. last name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange("lastName")}
          />
          <FormInput
            labelName="Email"
            placeholder="Ex. info@domain.com"
            name="email"
            value={form.email}
            onChange={handleChange("email")}
          />
          <FormInput
            labelName="Phone Number"
            placeholder="Ex. +1 987 654 3210"
            name="phone"
            value={form.phone}
            onChange={handleChange("phone")}
          />
          <FormSelect
            labelName="Select Type"
            name="type"
            value={form.type}
            onChange={handleChange("type")}
          >
            <option value="">Select Type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </FormSelect>
          <FormSelect
            labelName="Select Room"
            name="room"
            value={form.room}
            onChange={handleChange("room")}
          >
            <option value="">Select Room</option>
            <option value="Room 101">Room 101</option>
            <option value="Room 102">Room 102</option>
            <option value="Room 103">Room 103</option>
          </FormSelect>
          <FormDateInput
            labelName="Check In"
            name="checkIn"
            value={form.checkIn}
            onChange={handleChange("checkIn")}
          />
          <FormDateInput
            labelName="Check Out"
            name="checkOut"
            value={form.checkOut}
            onChange={handleChange("checkOut")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Ex. type message"
            rows="5"
            value={form.message}
            onChange={handleChange("message")}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
        </div>  
        <ErrorBox errorMessage={errorMessage} successMessage={successMessage} />;
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 cursor-pointer text-white px-8 py-3 rounded-md font-semibold inline-flex items-center transition-colors"
        >
          Book Appointment <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </form>
    );
  };

const ErrorBox = ({ errorMessage, successMessage }) => (
  <>
    {errorMessage ? (
      <p className="text-xs text-red-600">{errorMessage}</p>
    ) : successMessage ? (
      <p className="text-xs text-green-600">{successMessage}</p>
    ) : <p className="text-xs opacity-0">placeholder</p>}
  </>
);

export default BookingForm;