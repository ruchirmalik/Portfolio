import React from 'react';
import './projects.css'

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
                •	Built and containerized in Docker;supports user authentication, posting, deleting, liking and commenting on blogs; enabled pagination for enhanced blog navigation. <br />
                •	Leveraged Java & Spring Boot for backend architecture, React.js for frontend development; employed Redux for state management. <br />
                •	Established a CI/CD pipeline on Google Cloud Platform (GCP), allowing concurrent pushes from 6+ developers, to automating testing & deployment; used Slack bot to display real-time test-results. <br />
                •	Significantly reduced build & deployment times by 300% and ensured 80% unit-test code coverage. <br />
                •	Successfully delivered a feature-rich web application that met all client requirements and surpassed user expectations. <br />
              </p>

              <div className="tags">

                <p className="tag">React.js</p>
                <p className="tag">JavaScript</p>
                <p className="tag">Java</p>
                <p className="tag">Spring</p>
                <p className="tag">GCP</p>
                <p className="tag">Docker</p>
                <p className="tag">Slack</p>


              </div>
            </div>
          </div>

          <div className="individualProject">
            <img src="" alt="" className="projectImg" />
            <div className="projectInfo">
              <h2 className="projectName">When in Rome: A Data Visualization Project </h2>
              <p className="projectDesc"> The city of Rome alone has more than 20,000 airbnbs and it's almost impossible to understand the rental housing market if you're looking to rent your place out in the city. Therefore, we built an interactive, visually-pleasing data visualization for a Kaggle dataset in an attempt to identify Airbnb patterns and understand the competition better.  <br /> <br />
                •	Conducted meticulous pre-processing on a dataset exceeding 24,000 rows, strategically extracting essential attributes and innovatively deriving new variables to enrich the dataset for more profound visual insights. <br />
                •	Employed D3.js to design and implement visually captivating charts, graphs, and maps, each displaying a unique set of information.<br />
                •	Achieved multi-directional linkage between visualizations, facilitating the exploration of correlations and trends across different facets of Airbnb listings in Rome; implemented a range slider feature, empowering users to refine data based on ratings.<br />
                •	Delivered a successful project that provided actionable insights, empowering users with the knowledge needed to make strategic property investments in the Airbnb market, contributing to the project's overall success and positive user impact.<br />
              </p>

              <div className="tags">

                <p className="tag">D3.js</p>
                <p className="tag">JavaScript</p>
                <p className="tag">HTML</p>
                <p className="tag">CSS</p>
                <p className="tag">Data Pre-processing</p>

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

              <div className="tags">


                <p className="tag">TypeScript</p>
                <p className="tag">PHP</p>
                <p className="tag">HTML</p>
                <p className="tag">CSS</p>
                <p className="tag">Data Normalization</p>
                <p className="tag">E/R Diagram</p>
                <p className="tag">Relational Schema</p>

              </div>
            </div>
          </div>


        </div>

      </section>
    </div>
  )
}

export default Projects