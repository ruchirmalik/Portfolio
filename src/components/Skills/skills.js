import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './skills.css';
import frontend from '../../Assets/frontendVector.png';
import backend from '../../Assets/backend.png';
import uiux from '../../Assets/uiux.png';

const Skills = () => {
    const [selectedId, setSelectedId] = useState(null);

    const skillItems = [
        {
            id: 'uiux',
            imgSrc: uiux,
            title: 'UI / UX Design',
            description: 'As an individual with a keen eye for detail, I love creating simple yet eye-pleasing designs and UIs that are pixel-perfect. Working on my skills in Figma and Adobe Illustrator, I have some experience in wireframing, prototyping and building high-fidelity mockups.'
        },
        {
            id: 'frontend',
            imgSrc: frontend,
            title: 'Web Development',
            description: 'There\'s nothing more beautiful for me than bringing my own ideas to life. And as a software engineer, I love developing what I design. With experience and proficiency in React.js and its component libraries like ChakraUI and Mantine, I love creating new experiences and building visually-appealing websites.'
        },
        {
            id: 'backend',
            imgSrc: backend,
            title: 'Back-End Development',
            description: 'What I love most about being a backend developer is the opportunity to work behind the scenes, be it crafting the very backbone & infrastructure that powers applications or managing databases. It\'s the intricate problem-solving, optimizing code for efficiency, and creating scalable solutions that truly captivates me.'
        }
    ];

    return (
        <section id='skills'>
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">
                I'm a passionate & skilled developer and designer. I craft elegant yet efficient digital solutions and designs to address complex user problems. From concept to deployment, my work reflects a commitment to precision and ensures that every line of code prioritizes the user. <br /> Oh, and I love what I do!
            </span>
            <div className="skillBars">
                {skillItems.map(item => (
                    <AnimatePresence key={item.id}>
                        {selectedId === null || selectedId === item.id ? (
                            <motion.div
                                layout
                                layoutId={item.id}
                                className={`skillBar ${selectedId === item.id ? 'expanded' : ''}`}
                                onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={item.imgSrc} alt={item.title} className="skillBarImg" />
                                <div className="skillBarText">
                                    <h2>{item.title}</h2>
                                    <hr className='horizontalLine' />
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                ))}
            </div>
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        className="expanded-skillBar"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {skillItems.map(item =>
                            item.id === selectedId && (
                                <React.Fragment key={item.id}>
                                    <motion.img src={item.imgSrc} alt={item.title} className="skillBarImg" />
                                    <motion.h2>{item.title}</motion.h2>
                                    <motion.p>{item.description}</motion.p>
                                    <motion.button
                                        onClick={() => setSelectedId(null)}
                                        className="close-button"
                                    >
                                        Close
                                    </motion.button>
                                </React.Fragment>
                            )
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Skills;
