import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/mnjjbeyp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                alert("Thank you for your enquiry, We will revert back shortly");
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: ''
                });
            } else {
                // Specific error message from Formspree if available
                const errorMessage = data.errors ? data.errors.map(e => e.message).join(', ') : "Something went wrong.";
                alert(`Submission failed: ${errorMessage}. Please try again later.`);
            }
        } catch (error) {
            alert("Error sending message. Please check your connection or try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-content">
                <div className="contact-wrapper">
                    {/* Left Side - Form */}
                    <div className="contact-form-card">
                        <div className="form-header">
                            <h2 className="contact-title">Let’s work together!</h2>
                            <p className="contact-desc">
                                I design and code beautifully simple things and I love what I do.
                                Just simple like that!
                            </p>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    className="form-input"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    className="form-input"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone number"
                                    className="form-input"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-row">
                                <select
                                    name="service"
                                    className="form-select"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>—Please choose an option—</option>
                                    <option value="freelance">Freelance Project</option>
                                    <option value="job">Job Opportunity</option>
                                    <option value="collaboration">Collaboration</option>
                                </select>
                            </div>
                            <div className="form-row">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    className="form-textarea"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-send" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Info */}
                    <div className="contact-info-panel">
                        <div className="info-group">
                            <div className="icon-circle">
                                <Phone size={24} />
                            </div>
                            <div className="info-details">
                                <span className="label">Phone</span>
                                <span className="value">+91 98844 85312</span>
                            </div>
                        </div>

                        <div className="info-group">
                            <div className="icon-circle">
                                <Mail size={24} />
                            </div>
                            <div className="info-details">
                                <span className="label">Email</span>
                                <span className="value">manij472@gmail.com</span>
                            </div>
                        </div>

                        <div className="info-group">
                            <div className="icon-circle">
                                <MapPin size={24} />
                            </div>
                            <div className="info-details">
                                <span className="label">Address</span>
                                <span className="value">Chennai, Tamil Nadu, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
