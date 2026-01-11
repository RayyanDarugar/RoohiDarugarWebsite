import React, { useState } from 'react';


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

        <div className="pb-32">
            <section className="py-16 text-center">
                <div className="container mx-auto px-4 md:px-40">
                    <h1 className="font-serif text-5xl text-primary mb-4">Contact Us</h1>
                    <p className="text-xl text-text-light">Schedule a consultation or ask a question.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-40">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16">
                    <div className="bg-surface p-8 md:p-16 rounded-md">
                        <h2 className="mb-8 text-2xl font-serif text-primary">Get in Touch</h2>
                        <p className="mb-16 text-text-main">
                            We are here to help you pursue your financial goals. Please contact us to schedule a consultation.
                        </p>

                        <div className="contact-details">
                            <div className="mb-8">
                                <h3 className="text-lg text-primary mb-2 font-bold">Phone</h3>
                                <p className="text-text-main text-base"><a href="tel:8588798034">(858) 879-8034</a></p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-lg text-primary mb-2 font-bold">Email</h3>
                                <p className="text-text-main text-base"><a href="mailto:roohi.darugar@lpl.com">roohi.darugar@lpl.com</a></p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-lg text-primary mb-2 font-bold">Office</h3>
                                <p className="text-text-main text-base">
                                    LPL Financial<br />
                                    16776 Bernardo Center Drive, Suite 203<br />
                                    San Diego, CA, 92128
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-16 rounded-md border border-border-main">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="mb-8">
                                <label htmlFor="name" className="block mb-2 font-medium text-text-main">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-border-main rounded text-base focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div className="mb-8">
                                <label htmlFor="email" className="block mb-2 font-medium text-text-main">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-border-main rounded text-base focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div className="mb-8">
                                <label htmlFor="phone" className="block mb-2 font-medium text-text-main">Phone (Optional)</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-border-main rounded text-base focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="block mb-2 font-medium text-text-main">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                    className="w-full p-3 border border-border-main rounded text-base focus:outline-none focus:border-primary transition-colors"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full md:w-auto px-8 py-3 rounded bg-primary text-white hover:bg-[#002244] transition-colors">Send Message</button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-border-main">
                            <p className="text-xs text-text-light italic">
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
