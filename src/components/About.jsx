import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <div className="hexagon-container-about">
                    <img src="https://via.placeholder.com/400" alt="About Me" />
                </div>
            </div>

            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Frontend Developer!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex delectus iste, aliquid officia quasi aliquam deleniti consequuntur suscipit ducimus tenetur maiores vel commodi veniam ratione! Nisi praesentium delectus fugiat officiis cupiditate in illum, modi unde recusandae, molestiae excepturi voluptatum temporibus.</p>
                <button className="btn">Read More</button>
            </div>
        </section>
    );
};

export default About;
