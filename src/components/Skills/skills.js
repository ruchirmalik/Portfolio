import React from 'react'
import './skills.css';
import frontend from '../../Assets/frontend.png';
import backend from '../../Assets/backend.png';
import uiux from '../../Assets/uiux.png';

const Skills = () => {
  return (
    <section id = 'skills'>
         <span className="skillTitle">What I Do</span> <br/>
         <span className="skillDesc">I'm a skilled and self-motivated software developer with a keen eye for detail. I craft elegant and efficient digital solutions to address complex user problems. From concept to deployment, my work reflects a commitment to precision and ensures that every line of code prioritizes the user. <br/> Oh, and I love what I do! </span>
         <div className="skillBars">

            <div className="skillBar">
                <img src={uiux} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Product Design</h2>
                    <p>Demo Text</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={frontend} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Front-End Design/Dev</h2>
                    <p>Demo Text</p>
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