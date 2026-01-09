import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to a backend
        console.log('Form submitted:', formData);
        alert('Thank you for your message. We will be in touch shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="contact-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">Schedule a consultation or ask a question.</p>
                </div>
            </section>

            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p className="contact-intro">
                            We are here to help you pursue your financial goals. Please contact us to schedule a consultation.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <h3>Phone</h3>
                                <p><a href="tel:8588798034">(858) 879-8034</a></p>
                            </div>
                            <div className="contact-item">
                                <h3>Email</h3>
                                <p><a href="mailto:roohi.darugar@lpl.com">roohi.darugar@lpl.com</a></p>
                            </div>
                            <div className="contact-item">
                                <h3>Office</h3>
                                <p>
                                    LPL Financial<br />
                                    16776 Bernardo Center Drive, Suite 203<br />
                                    San Diego, CA, 92128
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
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
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone (Optional)</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>

                        <div className="form-disclaimer">
                            <p>
                                Submitting information through this website does not establish a client-advisor relationship. Please do not send confidential or sensitive information via this site or email.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
