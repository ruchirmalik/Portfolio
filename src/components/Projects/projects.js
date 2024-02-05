import React from 'react';
import './projects.css';
import github from '../../Assets/GitHub.png';

const Projects = () => {
  return (
    <div>
      <section className="projects">
        <span className="projectTitle">Projects</span>


        <div className="projectinfo">

          <div className="individualProject">
            <img src="" alt="" className="projectImg" />
            <div className="projectInfo">
              <h1 className="projectName">Zenith Blogs: A PWC-sponsored Software Engineering Project </h1>
              <p className="projectDesc">A PWC-sponsored project, Zenith Blogs is a comprehensive full-stack web blog application that represents collaborative efforts of a talented team of nine students. <br /> <br />
                •	Built a full-stack Docker blog application that supports user authentication, posting, deleting, liking and commenting on blogs. <br />
                •	Enabled pagination in blogs which improved initial page-loading times and enhanced user experience by simplifying navigation. <br />
                •	Leveraged Java & Spring Boot to implement server-side logic for: <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o	Creating and deleting new users & sending and deleting user-level upgrade requests. <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o	Creating, liking, disliking and commenting on blogs based on user-type and their privileges. <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o	Searching and sorting posts based on multiple filters. <br />
                •	Established a CI/CD pipeline on GCP, allowing concurrent pushes from 6 developers, to automate testing & deployment. <br />
                •	Implemented REST APIs to facilitate seamless communication between the front-end & back-end. <br />

              </p>

              <div className="projectFooter">
                <div className="tags">

                  <p className="tag">React.js</p>
                  <p className="tag">JavaScript</p>
                  <p className="tag">Java</p>
                  <p className="tag">Spring</p>
                  <p className="tag">GCP</p>
                  <p className="tag">Docker</p>
                  <p className="tag">Slack</p>
                  <p className="tag">CI/CD</p>

                </div>
                <div><a href="https://github.com/CPSC319-2022/zenith" target="_blank" className='projectLink'><img src={github} alt="Github_Logo" className="gitImg" /></a></div>
              </div>
            </div>
          </div>

          <div className="individualProject">
            <img src="" alt="" className="projectImg" />
            <div className="projectInfo">
              <h2 className="projectName">When in Rome: A Data Visualization Project </h2>
              <p className="projectDesc"> The city of Rome alone has more than 20,000 airbnbs and it's almost impossible to understand the rental housing market if you're looking to rent your place out in the city. Therefore, we built an interactive, visually-pleasing data visualization for a Kaggle dataset in an attempt to identify Airbnb patterns and understand the competition better.  <br /> <br />
                •	Conducted pre-processing on a dataset exceeding 24,000 rows to filter out invalid values and add new ones using JavaScript.<br />
                •	Employed D3.js to design and implement interactive visualizations, each displaying a unique set of information.<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o	Enabled multi-directional linkage which allowed users to explore relationships and dependencies between data points.<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o	Implemented a range-slider feature to allow users to filter data based on ratings.<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o	Built tooltips which provided supplementary information at a more granular level without cluttering the main views.<br />

              </p>
              <div className="projectFooter">
                <div className="tags">

                  <p className="tag">D3.js</p>
                  <p className="tag">JavaScript</p>
                  <p className="tag">HTML</p>
                  <p className="tag">CSS</p>
                  <p className="tag">Data Pre-processing</p>

                </div>
                <div><a href="https://github.com/ruchirmalik/When-In-Rome" target="_blank" className='projectLink'><img src={github} alt="Github_Logo" className="gitImg" /></a></div>
              </div>
            </div>
          </div>

          <div className="individualProject">
            <img src="" alt="" className="projectImg" />
            <div className="projectInfo">
              <h2 className="projectName">Fun-Town Sports Center </h2>
              <p className="projectDesc">•	Formulated an E/R diagram for a sports centre & translated it into a relational schema to establish a robust database foundation.<br />
                •	Recognized functional dependencies, applying the BCNF normalization technique to minimize data redundancy and optimize database efficiency.<br />
                •	Orchestrated the development of a responsive website using JS, PHP, HTML, and CSS, coupled with MySQL for seamless data retrieval.<br />
                •	Implemented an appointment management system, empowering coaches to create and delete appointments, enabling members to view, book, and cancel appointments with various coaches, and granting administrative oversight for comprehensive operations control<br />
              </p>
              <div className="projectFooter">
                <div className="tags">
                  <p className="tag">MySQL</p>
                  <p className="tag">TypeScript</p>
                  <p className="tag">PHP</p>
                  <p className="tag">HTML</p>
                  <p className="tag">CSS</p>
                  <p className="tag">Data Normalization</p>
                  <p className="tag">E/R Diagram</p>
                  <p className="tag">Relational Schema</p>
                </div>
                <div><a href="https://github.com/ruchirmalik/FunTown-Sports-Centre" target="_blank" className='projectLink'><img src={github} alt="Github_Logo" className="gitImg" /></a></div>
              </div>
            </div>
          </div>


        </div>

      </section>
    </div>
  )
}

export default Projects