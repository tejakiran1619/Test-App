import React from 'react';
import { FaShieldAlt, FaBrain, FaSatellite } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaShieldAlt className="icon" />,
    title: 'Threat Detection',
    desc: 'Real-time AI-based surveillance to detect and mitigate potential threats.',
  },
  {
    icon: <FaBrain className="icon" />,
    title: 'Autonomous Systems',
    desc: 'Developing intelligent systems for autonomous decision-making in defense scenarios.',
  },
  {
    icon: <FaSatellite className="icon" />,
    title: 'Communication Security',
    desc: 'Secure communication channels powered by advanced AI encryption.',
  },
];

const Services = () => (
  <section id="services" className="services-section">
    <h2 className="services-title">Our Services</h2>
    <div className="services-container">
      {services.map((s, idx) => (
        <div key={idx} className="service-card">
          <div className="service-icon">{s.icon}</div>
          <h3 className="service-heading">{s.title}</h3>
          <p className="service-text">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
