import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["Frontend Developer", "YouTuber", "Blogger"];

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
                <h3>Hello, It's Me</h3>
                <h1>John Kendric</h1>
                <h3>And I'm a <span className="multiple-text">{text}</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ab autem repellat reiciendis ipsam perspiciatis.</p>

                <div className="social-media">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>

                <button className="btn">Download CV</button>
            </div>

            <div className="home-img">
                <div className="hexagon-container">
                    <img src="https://via.placeholder.com/400" alt="Profile" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
