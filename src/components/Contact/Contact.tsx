import './Contact.scss';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { FormData } from '../../@types/interface';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact({ formData }: { formData: FormData[] }) {
  const [formValues, setFormValues] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Envoyer les données du formulaire (formValues) à votre backend ou effectuer une action appropriée
    console.log(formValues);
    // Réinitialiser le formulaire après soumission
    setFormValues({ name: '', email: '', phone: '', message: '' });
  };

  const handleRecaptchaChange = (value: string | null) => {
    // Mettez à jour votre état avec la valeur du captcha
    setCaptchaValue(value);
  };

 

  return (
    <div className="contact-container">
      <h2 className='title'>Contact</h2>
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
      <div className='captcha-container'>
          <ReCAPTCHA
          sitekey="6LcZKt0pAAAAADl-XUGOrlgXOFQEoMLyhp_T8vnC"
          onChange={handleRecaptchaChange}
          size="compact"
          /></div>
        
        <button className="submitButton"type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;


