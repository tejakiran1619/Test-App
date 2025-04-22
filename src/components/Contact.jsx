import React, { useState } from 'react';
import './Contact.css'; // Import this CSS file

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${form.name}! We'll get back to you soon.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          required 
          placeholder="Your Name" 
          className="contact-input" 
        />
        <input 
          type="email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          required 
          placeholder="Your Email" 
          className="contact-input" 
        />
        <textarea 
          name="message" 
          value={form.message} 
          onChange={handleChange} 
          required 
          placeholder="Your Message" 
          rows="5" 
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
