import React, { useState } from 'react';
import '../ContactUs/ContactUs.scss';

const ContactUs = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const unfilledFields = Object.entries(formData).filter(([key, value]) => value === '');
  
    if (unfilledFields.length > 0) {
    
      const missingFields = unfilledFields.map(([key]) => key).join(', ');
      alert(`Please fill out the following fields: ${missingFields}`);
    } else {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className='contactus'>
      <h2 className='contactus__title'>Contact Us</h2>
      <div className='contactus__border-bottom'></div>
      <div className='contactus__container'>
        <form onSubmit={handleSubmit}>
          <div className='contactus__name-container'>
            <div className='contactus__form-name'>
              <label htmlFor="firstName">First Name:</label>
              <input
                className='contactus__input'
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='contactus__form-name'>
              <label htmlFor="lastName">Last Name:</label>
              <input
                className='contactus__input'
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
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
