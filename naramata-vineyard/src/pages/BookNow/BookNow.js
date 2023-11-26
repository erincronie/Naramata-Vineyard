import React, { useState } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import './BookNow.scss';

const BookNow = () => {
  const [selectedRange, setSelectedRange] = useState([null, null]);
  const [showPopup, setShowPopup] = useState(false);

  const handleDateSelection = (dates) => {
    setSelectedRange(dates);
  };

  const calculateTotalAmount = () => {
    if (!selectedRange[0] || !selectedRange[1]) {
      return { totalAmount: 0, nights: 0 }; // No dates selected
    }

    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const startDate = selectedRange[0];
    const endDate = selectedRange[1];
    const nights = Math.round(Math.abs((startDate - endDate) / oneDay));

    return { totalAmount: nights * 100, nights };
  };

  const { totalAmount, nights } = calculateTotalAmount();

  const handleBookNow = () => {
    // Show the pop-up
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    // Close the pop-up
    setShowPopup(false);
  };

  return (
    <section className='booknow'>
      <Calendar onSelect={(dates) => handleDateSelection(dates)} />
      <div className='booknow__rates'>
        <h3 className='booknow__rates'>Rate: $100 CAD per night</h3>
        <p className='booknow__checkin'>Check in: 3pm PST</p>
        <p className='booknow__checkout'>Check out: 11am PST</p>
        {nights > 0 && (
          <p className='booknow__selected-nights'>{nights} {nights === 1 ? 'night' : 'nights'} selected</p>
        )}
        <p className='booknow__total'>Total Amount: ${totalAmount} CAD</p>
        <button className='booknow__button-confirm' onClick={handleBookNow}>Book Now</button>
      </div>

      {/* Pop-up modal */}
      {showPopup && (
        <div className='booknow__popup'>
          <div className='booknow__popup-content'>
            <span className='booknow__popup-close' onClick={handlePopupClose}>&times;</span>
            <p className='booknow__popup-message'>Sorry, we are currently not taking bookings right now.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default BookNow;
