import React from 'react'
import './skills.css';
import frontend from '../../Assets/frontendVector.png';
import backend from '../../Assets/backend.png';
import uiux from '../../Assets/uiux.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I Do</span> <br />
            <span className="skillDesc">I'm a passionate, skilled and self-motivated developer and designer. I craft elegant yet efficient digital solutions and designs to address complex user problems. From concept to deployment, my work reflects a commitment to precision and ensures that every line of code prioritizes the user. <br /> Oh, and I love what I do! </span>
            <div className="skillBars">

                <div className="skillBar">
                    <img src={uiux} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI / UX Design</h2><br />
                        <p>As an individual with a keen eye for detail, I love creating eye-pleasing designs and UIs. Working on my skills in Figma and Illustrator, I have some experience in wireframing, prototyping and building high-fidelity mockups.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={frontend} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Development</h2><br />
                        <p>There's nothing more beautiful for me than bringing my own ideas to life. And as a software engineer, I love developing what I design. With experience and proficiency in React.js and its component libraries like ChakraUI and Mantine, I love creating new experiences and building visually-appealing websites.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={backend} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Back-End Development</h2>
                        <p>Demo Text</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills