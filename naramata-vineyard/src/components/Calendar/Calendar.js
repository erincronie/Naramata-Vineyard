import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.scss';

const MyCalendar = ({ onSelect }) => {
  const [selectedRange, setSelectedRange] = useState([null, null]);

  const handleDateChange = (dates) => {
    setSelectedRange(dates);
    // Pass selected dates to the parent component
    onSelect && onSelect(dates);
  };

  const defaultActiveStartDate = new Date();
  const minDate = new Date(2023, 0, 1);
  const maxDate = new Date(2024, 11, 31);

  return (
    <div className='myCalendar'>
      <h2 className='myCalendar__title'>Choose a date</h2>
      <div className='myCalendar__border-bottom'></div>
      <p className='myCalendar__selected-date'>
        {selectedRange[0] && selectedRange[1] ? (
          <>
            Selected Date Range: {selectedRange[0].toDateString()} to {selectedRange[1].toDateString()}
          </>
        ) : (
          selectedRange[0] ? `Selected Start Date: ${selectedRange[0].toDateString()}` : 'Select a start date'
        )}
      </p>
      <Calendar
        onChange={handleDateChange}
        selectRange
        value={selectedRange}
        defaultActiveStartDate={defaultActiveStartDate}
        minDate={minDate}
        maxDate={maxDate}
      />
    </div>
  );
}

export default MyCalendar;
