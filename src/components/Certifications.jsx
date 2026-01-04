import { motion } from 'framer-motion';
import { FaCertificate, FaAward } from 'react-icons/fa';
import './Certifications.css';

const certificationsData = [
    {
        id: 1,
        title: "Introduction to IoT",
        issuer: "NPTEL",
        date: "Completed",
        description: "Comprehensive overview of Internet of Things architecture and applications.",
        link: "/cert_iot_nptel.pdf"
    },
    {
        id: 2,
        title: "IoT and Digital Transformation",
        issuer: "CISCO",
        date: "Completed",
        description: "Understanding how IoT drives digital transformation across industries.",
        link: "/cert_iot_cisco.pdf"
    },
    {
        id: 3,
        title: "Introduction to Modern AI",
        issuer: "CISCO",
        date: "Completed",
        description: "Fundamentals of modern Artificial Intelligence and its real-world impact.",
        link: "/cert_ai_cisco.pdf"
    },
    {
        id: 4,
        title: "AIML Developer",
        issuer: "Eduskills",
        date: "Completed",
        description: "Practical skills in building AI and Machine Learning models.",
        link: "/cert_aiml_eduskills.pdf"
    },
    {
        id: 5,
        title: "Android Web Developer",
        issuer: "Eduskills",
        date: "Completed",
        description: "Development of Android applications and web integration.",
        link: "/cert_android_eduskills.pdf"
    },
    {
        id: 6,
        title: "Programming in Python",
        issuer: "Udemy",
        date: "Completed",
        description: "Mastering Python programming for software development and data science.",
        link: "/cert_python_udemy.pdf"
    }
];

const Certifications = () => {
    return (
        <section className="certifications" id="certifications">
            <h2 className="heading">My <span>Certifications</span></h2>

            <div className="certifications-container">
                {certificationsData.map((cert, index) => (
                    <motion.div
                        className="cert-card"
                        key={cert.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="cert-icon">
                            <FaAward />
                        </div>
                        <div className="cert-content">
                            <h3>{cert.title}</h3>
                            <h4>{cert.issuer}</h4>
                            <span className="cert-date">{cert.date}</span>
                            <p>{cert.description}</p>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-btn">View Credential</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
