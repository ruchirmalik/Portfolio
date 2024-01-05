import React from 'react';
import './techstack.css';
import js from '../../Assets/js.png';
import java from '../../Assets/javalogo.png';
import ts from '../../Assets/ts.png';
import cplusplus from '../../Assets/cplusplus.png';
import reactjs from '../../Assets/react.png';
import d3js from '../../Assets/d3.png';
import nodejs from '../../Assets/node.png';
import mysql from '../../Assets/mysql.png';
import mongodb from '../../Assets/mongodb.png';
import php from '../../Assets/php.png';
import figma from '../../Assets/figma.png';
import python from '../../Assets/python.png';
import git from '../../Assets/git.png';

import SearchBar from '../SearchBar/searchBar';

const Techstack = () => {
    return (
        <section className='techstack'>
            <span className="techStackTitle"> My Tech Stack </span>
            <span className="techStackDesc">
                I am a fast learner. And I take pride in it. <br />
                Having worked on diverse projects encompassing UI/UX design, front-end and back-end development, I have already added multiple technologies & programming languages to my 'code web'.
                However, that doesn't stop me. I'm always learning something new. Always expanding my knowledge base.
                <br />
                <br />
                Here are some of the technologies that I have experience working with:
            </span>

            <SearchBar />

            {/* <div className="table">
            <div className="row1">
                <div className="individualSkill">
                    <img src={js} alt="JS" className="skillImg" />
                    <h4 className="skillName">JavaScript</h4>
                </div>
                <div className="individualSkill">
                    <img src={java} alt="Java" className="skillImg" />
                    <h4 className="skillName">Java</h4>
                </div>
                <div className="individualSkill">
                    <img src={ts} alt="TS" className="skillImg" />
                    <h4 className="skillName">TypeScript</h4>
                </div>
                <div className="individualSkill">
                    <img src={cplusplus} alt="C++" className="skillImg" />
                    <h4 className="skillName">C++</h4>
                </div>
                <div className="individualSkill">
                    <img src={nodejs} alt="Node_Image" className="skillImg" />
                    <h4 className="skillName">Node</h4>
                </div>

                
            </div>

            <div className="row2">
                <div className="individualSkill">
                    <img src={reactjs} alt="React_Image" className="skillImg" />
                    <h4 className="skillName">React</h4>
                </div>
                <div className="individualSkill">
                    <img src={d3js} alt="D3_Image" className="skillImg" />
                    <h4 className="skillName">D3</h4>
                </div>
                <div className="individualSkill">
                    <img src={mysql} alt="MySQL_Image" className="skillImg" />
                    <h4 className="skillName">MySQL</h4>
                </div>
                <div className="individualSkill">
                    <img src={mongodb} alt="MongoDB_Image" className="skillImg" />
                    <h4 className="skillName">MongoDB</h4>
                </div>
            </div>

            <div className="row3">
                <div className="individualSkill">
                    <img src={figma} alt="Figma_Image" className="skillImg" />
                    <h4 className="skillName">Figma</h4>
                </div>
                <div className="individualSkill">
                    <img src={php} alt="Php_Image" className="skillImg" />
                    <h4 className="skillName">PHP</h4>
                </div>
                <div className="individualSkill">
                    <img src={python} alt="Python_Image" className="skillImg" />
                    <h4 className="skillName">Python</h4>
                </div>
                <div className="individualSkill">
                    <img src={git} alt="Git_Image" className="skillImg" />
                    <h4 className="skillName">Git</h4>
                </div>
                <div className="individualSkill">
                    <img src={git} alt="Git_Image" className="skillImg" />
                    <h4 className="skillName">Git</h4>
                </div>
            </div>

            

        </div> */}

        </section>
    )
}

export default Techstack;