import { motion } from 'framer-motion';
import { FaFacebookF, FaEnvelope, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["Full Stack Developer", "Creative Coder", "Mern Stack Developer"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 100 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles, typingSpeed]);

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello,It's Me</h3>
                <h1>Monishkumar R</h1>
                <h3>And I'm a <span className="multiple-text">{text}</span></h3>
                <p></p>

                <div className="social-media">
                    <a href="#"><FaFacebookF /></a>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox " target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                    <a href="https://www.instagram.com/lord_of_minds_23/?next=%2F" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/monishkumar-r-cse-424722373/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                </div>

                <a href="/resume.pdf" download="Monish_Kumar_Resume.pdf" className="btn">Download CV</a>
            </div>

            <div className="home-img">
                <div className="oval-container">
                    <img src="https://via.placeholder.com/400" alt="Profile" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
