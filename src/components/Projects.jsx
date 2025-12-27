import { motion } from 'framer-motion';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: "Project One",
        description: "A cool web application built with React.",
        tags: ["React", "Node.js"],
    },
    {
        id: 2,
        title: "Project Two",
        description: "Mobile-first responsive design showcase.",
        tags: ["CSS", "HTML"],
    },
    {
        id: 3,
        title: "Project Three",
        description: "Full stack e-commerce platform.",
        tags: ["MERN", "Redux"],
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                My Projects
            </motion.h2>

            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
