import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.scss';

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const defaultActiveStartDate = new Date();

  // Set minDate to January 1, 2023
  const minDate = new Date(2023, 0, 1);

  // Set maxDate to December 31, 2024
  const maxDate = new Date(2024, 11, 31);

  return (
    <div className='myCalendar'>
      <h1 className='myCalendar__title'>Select your stay</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        defaultActiveStartDate={defaultActiveStartDate}
        minDate={minDate}
        maxDate={maxDate}
      />
      <p className='myCalendar__selected-date'>Selected Date: {selectedDate.toDateString()}</p>
    </div>
  );
}

export default MyCalendar;
