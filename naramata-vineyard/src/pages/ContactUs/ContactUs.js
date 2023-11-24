import React, { useState } from 'react';
import '../ContactUs/ContactUs.scss';

const ContactUs = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here for form submission (e.g., sending data to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <section className='contactus'>
    <h2 className='contactus__title'>Contact Us</h2>

    <div className='contactus__container'>
      <form onSubmit={handleSubmit}>
        <div className='contactus__form-name'>
          <label htmlFor="name">Name:</label>
          <input
            className='contactus__input'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='contactus__form-email'>
          <label htmlFor="email">Email:</label>
          <input
            className='contactus__input'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='contactus__form-message'>
          <label htmlFor="message">Message:</label>
          <textarea
            className='contactus__input'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className='contactus__form-button'>
          <button className='contactus__button' type="submit">Submit</button>
        </div>
      </form>
    </div>
    </section>
  );
};

export default ContactUs;
