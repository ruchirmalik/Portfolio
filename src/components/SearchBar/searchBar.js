import React, { useState } from 'react';
import './searchBar.css';
import ReactDOM from 'react-dom';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
import illus from '../../Assets/illustrator.png';
import npm from '../../Assets/npm.png';
import tailwind from '../../Assets/tailwind.png';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10,
        slidesToSlide: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const SearchBar = () => {

    const skillList = [
        { id: 1, image: java, name: "Java" },
        { id: 2, image: js, name: "JavaScript" },
        { id: 3, image: ts, name: "TypeScript" },
        { id: 4, image: cplusplus, name: "C++" },
        { id: 5, image: reactjs, name: "React.js" },
        { id: 6, image: nodejs, name: "Node.js" },
        { id: 7, image: d3js, name: "D3" },
        { id: 8, image: mysql, name: "MySQL" },
        { id: 9, image: mongodb, name: "MongoDB" },
        { id: 10, image: php, name: "PHP" },
        { id: 11, image: figma, name: "Figma" },
        { id: 12, image: python, name: "Python" },
        { id: 13, image: git, name: "Git" },
        { id: 14, image: illus, name: "Adobe Illustrator" },
        { id: 15, image: npm, name: "npm" },
        { id: 16, image: tailwind, name: "Tailwind CSS" }
    ];

    const [input, setInput] = useState("");
    const [filteredData, setFilteredData] = useState(skillList);



    const handleChange = e => {
        e.preventDefault();
        setInput(e.target.value);
        filterSkillList(e.target.value);
    };

    const filterSkillList = (searchTerm) => {
        const filteredResults = skillList.filter((skill) =>
            skill.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
        );
        setFilteredData(filteredResults);
    };

    return (
        <div>


            {/* {filteredData.length > 0 ? (
                <table>
                
                <tbody>
                    {filteredData.map((skill) => (
                    <tr key={skill.id}>
                        <td className='row'> <img src={skill.image} alt={skill.name} style={{ width: '50px', height: '50px' }} /></td>
                        
                    </tr>
                    ))}
                </tbody>
                </table>
            ) : (
                <p>No results found.</p>
      )} */}

            {/* <Carousel className='crsl' autoPlay interval = '3000' stopOnHover infiniteLoop centerMode
    centerSlidePercentage={10} showThumbs = {false}>
            {
                skillList.map(skill => <img src={skill.image} alt={skill.name}/>)
            }
        </Carousel> */}
            {filteredData.length > 0 ? (


                <div className='rowContainer'>
                    <Carousel className='crsl' responsive={responsive} centerMode={true} autoPlay={true} autoPlaySpeed={2000} containerClass="carousel-container" interval='1000' infinite={true}
                        centerSlidePercentage={10} showThumbs={false} swipeable={true} swipeScrollTolerance={1}>

                        {filteredData.map((skill) => (

                            <div className='row' key={skill.id}>
                                <img src={skill.image} alt={skill.name} title={skill.name} style={{ width: '50px', height: '50px' }} />
                            </div>

                        ))}

                    </Carousel>
                </div>
            ) : (
                <p> <br />No results found. But don't worry, I learn quick :) <br /></p>

            )}
            <div className="search">
                {/* <label htmlFor="SkillInput">Search for a technology in my tech stack:</label> */}

                <input
                    type="search"
                    placeholder="Ex: JavaScript"
                    onChange={handleChange}
                    value={input}
                    className='searchBar' />
            </div>
        </div>
    );

};

export default SearchBar;
