import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router if you're using it
import '../Policy/Policy.scss';

const Policy = () => {
  return (
    <section className='policy'>
      <h2 className='policy__title'>Policies</h2>
      <div className='policy__border-bottom'></div>
      <div className='policy__content'>
        <h3 className='policy__subtitle'>Maximum Guests:</h3>
        <p className='policy__text'>Our bed and breakfast can accommodate a maximum of 4 guests per reservation.</p>

        <h3 className='policy__subtitle'>Check-In and Check-Out Times:</h3>
        <p className='policy__text'>Check-in time is from 3:00 PM, and check-out time is by 11:00 AM.</p>

        <h3 className='policy__subtitle'>Smoking Policy:</h3>
        <p className='policy__text'>For the comfort and safety of all guests, smoking is not permitted in any indoor areas of the bed and breakfast.</p>

        <h3 className='policy__subtitle'>Pet Policy:</h3>
        <p className='policy__text'>Pets are allowed on the premises, but advance approval is required. Please contact us before making a reservation with your pet. Additional charges may apply.</p>

        <h3 className='policy__subtitle'>Cancellation Policy:</h3>
        <p className='policy__text'>We understand that plans may change, but we kindly request that you notify us of any cancellations at least 1 week before your scheduled arrival date. Cancellations made within 1 week of arrival will be subject to a cancellation fee. No-shows will be charged the full amount of the reservation.</p>

        <p className='policy__text'>
          We appreciate your cooperation and understanding. If you have any questions or special requests regarding our policies, feel free to <Link to="/contact" className="policy__contact-button">contact us</Link>.
        </p>

        <div className='policy__button-container'>
            <Link to="/contactus" className="policy__button">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Policy;
