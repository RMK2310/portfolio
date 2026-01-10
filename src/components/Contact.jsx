import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>

            <div className="contact-container">
                {/* Contact Information */}
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>Get in Touch</h3>
                    <p>
                        Feel free to reach out for collaborations, projects, or just to say hi!
                        I'm always open to discussing new ideas and opportunities.
                    </p>

                    <div className="info-box">
                        <div className="info-item">
                            <div className="icon"><FaEnvelope /></div>
                            <div className="details">
                                <h4>Email</h4>
                                <p>monishkumarr.cse2024@citchennai.net</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-icons">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    action="mailto:monishkumarr.cse2024@citchennai.net"
                    method="post"
                    enctype="text/plain"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="input-box">
                        <input type="text" name="name" placeholder="Full Name" required />
                        <input type="email" name="email" placeholder="Email Address" required />
                    </div>
                    <div className="input-box">
                        <input type="number" name="mobile" placeholder="Mobile Number" />
                        <input type="text" name="subject" placeholder="Email Subject" />
                    </div>
                    <textarea name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
                    <input type="submit" value="Send Message" className="btn" />
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
