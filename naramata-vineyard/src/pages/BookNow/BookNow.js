import React, { useState } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import './BookNow.scss';

const BookNow = () => {
  const [selectedRange, setSelectedRange] = useState([null, null]);

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

    return { totalAmount: nights * 100, nights }; // $100 CAD per night
  };

  const { totalAmount, nights } = calculateTotalAmount();

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
      </div>
    </section>
  );
}

export default BookNow;



