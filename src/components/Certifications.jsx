import { FaAward } from 'react-icons/fa';
import './Certifications.css';

const certificationsData = [
    {
        id: 1,
        title: "Introduction to IoT",
        issuer: "NPTEL",
        date: "Completed",
        description: "Foundational course on IoT connectivity, sensing, actuation, and networking protocols like MQTT and Zigbee, with practical implementation using Arduino and Python.",
        link: "/cert_iot_nptel.pdf"
    },
    {
        id: 2,
        title: "IoT and Digital Transformation",
        issuer: "CISCO",
        date: "Completed",
        description: "Explores how IoT, AI, and Big Data drive digital transformation, covering automation, security challenges, and the connection of billions of devices.",
        link: "/cert_iot_cisco.pdf"
    },
    {
        id: 3,
        title: "Introduction to Modern AI",
        issuer: "CISCO",
        date: "Completed",
        description: "Beginner-friendly exploration of AI fundamentals, including neural networks, NLP, computer vision, and ethical considerations, with hands-on chatbot exercises.",
        link: "/cert_ai_cisco.pdf"
    },
    {
        id: 4,
        title: "AIML Developer",
        issuer: "Eduskills",
        date: "Completed",
        description: "Industry-ready training on TensorFlow, object detection, and image classification, focusing on building and deploying ML models using Google Colab.",
        link: "/cert_aiml_eduskills.pdf"
    },
    {
        id: 5,
        title: "Android Web Developer",
        issuer: "Eduskills",
        date: "Completed",
        description: "Development of functional Android applications using Java/Kotlin, UI/UX design integration, API handling, and deployment on Google Play.",
        link: "/cert_android_eduskills.pdf"
    },
    {
        id: 6,
        title: "Programming in Python",
        issuer: "Udemy",
        date: "Completed",
        description: "Comprehensive Python course covering syntax, control flow, data analysis with NumPy/Pandas, visualization with Matplotlib/Seaborn, and basics of Machine Learning.",
        link: "/cert_python_udemy.pdf"
    },
    {
        id: 7,
        title: "IoT Cloud Engineer",
        issuer: "Eduskills",
        date: "Completed",
        description: "Cloud-integrated IoT system design, focusing on AWS integration, device messaging, real-time monitoring, and Industrial IoT (IIoT) solutions.",
        link: "/cert_iot_cloud_eduskills.pdf"
    }
];

const Certifications = () => {
    return (
        <section className="certifications" id="certifications">
            <h2 className="heading">My <span>Certifications</span></h2>

            <div className="certifications-container">
                {certificationsData.map((cert) => (
                    <div className="cert-card" key={cert.id}>
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
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
