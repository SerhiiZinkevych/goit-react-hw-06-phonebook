// Core
import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
// Styles
import styles from './ContactForm.module.css';

const ContactForm = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) {
      return;
    }

    onFormSubmit({ name, number });
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} container shadow`}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          value={name}
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="number">
        Number
        <MaskedInput
          mask={[
            '(',
            /\d/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          name="number"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a phone number"
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
