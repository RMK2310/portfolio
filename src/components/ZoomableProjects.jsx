import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaTimes, FaPlus, FaTrash, FaSpider } from 'react-icons/fa';
import './ZoomableProjects.css';

// Calculate circular positions
const calculateCircularPosition = (index, total, radius = 250) => {
    const angle = (index / total) * 2 * Math.PI; // Angle in radians
    return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
    };
};

const initialData = [
    { id: 1, title: "Electronic Notice Board", category: "IoT / Hardware", color: "#0ef" },
    { id: 2, title: "Spider Web Gallery", category: "Interactive UI", color: "#ff004f" },
    { id: 3, title: "Secure File Vault", category: "Cybersecurity", color: "#4ade80" },
    { id: 4, title: "Smart Campus", category: "Full Stack", color: "#fbbf24" },
    { id: 5, title: "Biometric Auth", category: "Security", color: "#a855f7" },
    { id: 6, title: "React Portfolio", category: "Design", color: "#f97316" }
];

// Initialize with positions
const initialProjects = initialData.map((p, i) => {
    const pos = calculateCircularPosition(i, initialData.length);
    return { ...p, x: pos.x, y: pos.y };
});

const SpiderWebProjects = () => {
    const [projects, setProjects] = useState(initialProjects);
    const [selectedId, setSelectedId] = useState(null);
    const containerRef = useRef(null);

    // Recalculate positions when count changes (optional, but keeps circle perfect)
    // For now, we just add new ones at a random angle on the radius
    const addProject = () => {
        const newId = Date.now();
        const angle = Math.random() * 2 * Math.PI;
        const radius = 250;
        setProjects([...projects, {
            id: newId,
            title: "New Project",
            category: "Pending",
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
            color: "#ffffff"
        }]);
    };

    const removeProject = (e, id) => {
        e.stopPropagation();
        setProjects(projects.filter(p => p.id !== id));
        if (selectedId === id) setSelectedId(null);
    };

    return (
        <section className="spider-web-section" id="projects" ref={containerRef}>
            <h2 className="heading">Web of <span>Projects</span></h2>
            <p className="instruction">Projects orbit the web. Drag to interact.</p>

            <div className="web-container">
                {/* SVG Background Web */}
                <SpiderWebSVG />

                {/* Central Spider */}
                <div className="spider-hub">
                    <FaSpider className="spider-icon" />
                </div>

                {/* The Nodes */}
                {projects.map((project) => (
                    <WebNode
                        key={project.id}
                        project={project}
                        setSelectedId={setSelectedId}
                        removeProject={removeProject}
                    />
                ))}

                <button className="add-btn" onClick={addProject}>
                    <FaPlus /> Add Project
                </button>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            className="project-modal"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal" onClick={() => setSelectedId(null)}><FaTimes /></button>
                            {projects.map(p => p.id === selectedId && (
                                <div key={p.id} className="modal-content">
                                    <h2 style={{ color: p.color }}>{p.title}</h2>
                                    <span className="badge">{p.category}</span>
                                    <p>Caught in the web! Use the controls to view source or demo.</p>
                                    <div className="modal-actions">
                                        <button className="modal-btn">View Code</button>
                                        <button className="modal-btn">Live Demo</button>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

const WebNode = ({ project, setSelectedId, removeProject }) => {
    // UPDATED: No useSpring, direct MotionValue usage for correct drag physics
    const x = useMotionValue(project.x);
    const y = useMotionValue(project.y);

    return (
        <>
            <svg className="web-strand">
                <motion.line
                    x1="50%"
                    y1="50%"
                    x2={useTransform(x, (val) => `calc(50% + ${val}px)`)}
                    y2={useTransform(y, (val) => `calc(50% + ${val}px)`)}
                    stroke="rgba(0, 238, 255, 0.2)"
                    strokeWidth="1.5"
                />
            </svg>

            <motion.div
                className="project-node-web"
                style={{ x, y, borderColor: project.color }}
                drag
                // UPDATED: Constraints match the project's layout position so it snaps here
                dragConstraints={{ left: project.x, right: project.x, top: project.y, bottom: project.y }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
                onDragStart={() => document.body.style.cursor = 'grabbing'}
                onDragEnd={() => document.body.style.cursor = 'default'}
                onDoubleClick={() => setSelectedId(project.id)}
                whileHover={{ scale: 1.2, zIndex: 10, cursor: 'grab', boxShadow: `0 0 20px ${project.color}` }}
            >
                <div className="node-content-mini">
                    <div className="node-dot" style={{ background: project.color }}></div>
                    <h4>{project.title}</h4>
                </div>
                <button className="delete-btn-hover" onClick={(e) => removeProject(e, project.id)}>
                    <FaTimes />
                </button>
            </motion.div>
        </>
    );
};

// Pure CSS/SVG Web Background
const SpiderWebSVG = () => (
    <svg className="svg-bg" viewBox="0 0 800 800">
        <defs>
            <radialGradient id="web-glow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="rgba(0, 238, 255, 0.2)" />
                <stop offset="100%" stopColor="transparent" />
            </radialGradient>
        </defs>

        {/* Central Glow (The "Inside") */}
        <circle cx="400" cy="400" r="150" fill="url(#web-glow)" />

        {/* Radial Lines - Stronger */}
        {[...Array(12)].map((_, i) => (
            <line
                key={`radial-${i}`}
                x1="400" y1="400"
                x2={400 + 400 * Math.cos(i * 30 * Math.PI / 180)}
                y2={400 + 400 * Math.sin(i * 30 * Math.PI / 180)}
                stroke="rgba(0, 238, 255, 0.3)" strokeWidth="1.5"
            />
        ))}
        {/* Concentric Polygons - Stronger */}
        {[50, 100, 150, 200, 250, 300, 350].map((r, i) => (
            <circle
                key={`circle-${i}`}
                cx="400" cy="400" r={r}
                fill="none"
                stroke="rgba(0, 238, 255, 0.2)" strokeWidth="1.5"
                style={{ filter: "drop-shadow(0 0 2px rgba(0,238,255,0.3))" }}
            />
        ))}
    </svg>
);

export default SpiderWebProjects;
