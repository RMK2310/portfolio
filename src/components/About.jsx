import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <div className="oval-container-about">
                    <img src="https://via.placeholder.com/400" alt="About Me" />
                </div>
            </div>

            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Frontend Developer!</h3>
                <p>I am a passionate developer with a knack for building immersive web experiences. I have honed my skills as an intern at <strong>Cognifyz Tech</strong> and <strong>Alfido Tech</strong>, working on real-world full-stack and frontend projects. From crafting smart electronic notice boards to designing physics-based interactive portfolios, I love bridging the gap between hardware and software.</p>
                <button className="btn">Read More</button>
            </div>
        </section>
    );
};

export default About;
