import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendContactForm } from "../store/features/todo/todoSlice";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comments: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendContactForm(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-orange-500 rounded-lg">
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">First Name:</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Comments:</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <button type="submit" className="bg-white text-orange-500 px-4 py-2 rounded-lg font-bold">Submit</button>
    </form>
  );
};

export default ContactForm;