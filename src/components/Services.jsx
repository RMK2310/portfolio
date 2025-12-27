import { FaCode, FaPaintBrush, FaChartBar } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    return (
        <section className="services" id="services">
            <h2 className="heading">Our <span>Services</span></h2>

            <div className="services-container">
                <div className="services-box">
                    <FaCode className="service-icon" />
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quia voluptas nostrum?</p>
                    <button className="btn">Read More</button>
                </div>

                <div className="services-box">
                    <FaPaintBrush className="service-icon" />
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quia voluptas nostrum?</p>
                    <button className="btn">Read More</button>
                </div>

                <div className="services-box">
                    <FaChartBar className="service-icon" />
                    <h3>Digital Marketing</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quia voluptas nostrum?</p>
                    <button className="btn">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Services;
