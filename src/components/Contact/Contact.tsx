import './Contact.scss';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

function Contact() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = (phone: string) => /^\d{10}$/.test(phone);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(formValues.email)) {
      setResponseMessage('Invalid email format');
      return;
    }

    if (!isValidPhone(formValues.phone)) {
      setResponseMessage('Invalid phone number format');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/send_email.php', formValues);
      setResponseMessage('Email sent successfully');
      setFormValues({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data);
      } else {
        console.error('Unknown error', error);
      }
      setResponseMessage('Failed to send email');
    }
  };

  return (
    <div className="contact-container">
      <h2 className='title'>Contact</h2>
      {responseMessage && <p className='formResponse'>{responseMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className="submitButton" type="submit">Envoyer</button>
      </form>
     
    </div>
  );
}

export default Contact;
