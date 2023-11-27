import React, { useState } from 'react';
import './ReviewForm.scss'; 

const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, comment });
    setName('');
    setComment('');
  };

  return (
    <div className="review-form-container">
      <h2 className="review-form__title">Already stayed with us?</h2>
      <p className="review-form__text">Leave a review!</p>


      <form className="review-form" onSubmit={handleSubmit}>
        <label className="review-form__label" htmlFor="name">
          Name:
        </label>
        <input
          className="review-form__input"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="review-form__label" htmlFor="comment">
          Comment:
        </label>
        <textarea
          className="review-form__input"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>

        <button className="review-form__button" type="submit">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
