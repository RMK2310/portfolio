import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import './Internships.css';

const internshipData = [
    {
        id: 1,
        role: "Software Development Intern",
        company: "Cognifyz Tech",
        duration: "Nov 2025 – Dec 2025",
        description: "Gained proficiency in full-stack workflows, coding fundamentals, and responsive UI/UX with form validation. Dealt with backend logic (servers, databases) and enhanced problem-solving skills via independent research. Demonstrated strong independence in tackling real-world coding challenges and building collaboration tools."
    },
    {
        id: 2,
        role: "Frontend Developer Intern",
        company: "Alfido Tech",
        duration: "Nov 2025 – Dec 2025",
        description: "Built core web skills through progressive projects like responsive portfolios, landing pages, and interactive calculators using HTML, CSS, and JavaScript. Completed responsive webpages and biography sites, boosting confidence in frontend basics. The remote, task-driven format fostered independence and provided mentorship insights."
    }
];


const Internships = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <section className="timeline-section" id="internships" ref={ref}>
            <h2 className="heading">Experience <span>Timeline</span></h2>

            <div className="timeline-items">
                {/* SVG Route Line */}
                <div className="timeline-svg-container">
                    <svg width="10" height="100%" viewBox="0 0 10 100" preserveAspectRatio="none">
                        {/* Background Track */}
                        <line x1="5" y1="0" x2="5" y2="100" stroke="#323946" strokeWidth="4" strokeDasharray="5,5" />
                        {/* Interactive Progress Line */}
                        <motion.path
                            d="M 5 0 L 5 100" // Vertical line path
                            fill="transparent"
                            strokeWidth="4"
                            stroke="#0ef"
                            style={{ pathLength: scrollYProgress }}
                        />
                    </svg>
                </div>

                {internshipData.map((item, index) => (
                    <div className="timeline-item" key={item.id}>
                        <motion.div
                            className="timeline-dot"
                            initial={{ scale: 0, backgroundColor: "#323946" }}
                            whileInView={{ scale: 1, backgroundColor: "#0ef" }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            viewport={{ amount: 1 }} // Only activate when fully reached
                        ></motion.div>
                        <div className="timeline-date">{item.duration}</div>
                        <motion.div
                            className="timeline-content"
                            initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
                            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            viewport={{ margin: "-10% 0px -10% 0px" }} // Triggers slightly before resizing
                            transition={{ duration: 0.6, type: "spring" }}
                        >
                            <h3>{item.role}</h3>
                            <h4>{item.company}</h4>
                            <p>{item.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Internships;
