import React from 'react';
import './experience.css';


const Experience = () => {
    return (
        <section id="experience">
            <span className="experienceTitle">Experience</span>

            <div className="list">
                <div className="individualExperience">
                    <div className="header">
                        <h3 className="experienceCompany">Saiinfoways Technologies</h3>
                        <h3 className="experienceLocation"><i>Del, IN</i></h3>
                    </div>
                    <div className="experienceRole">Web Developer Intern</div>
                    <div className="experienceYear">May 2020 - Jan 2021</div>
                </div>

                <div className="individualExperience">
                    <div className="header">
                        <h3 className="experienceCompany">Undergraduate Statistics Society (UBC)</h3>
                        <h3 className="experienceLocation"><i>Van, CA</i></h3>
                    </div>
                    <div className="experienceRole">Technical Events Director</div>
                    <div className="experienceYear">Sept 2022 - Apr 2023</div>
                </div>

                <div className="individualExperience">
                    <div className="header">
                        <h3 className="experienceCompany">Freshii</h3>
                        <h3 className="experienceLocation"><i>Van, CA</i></h3>
                    </div>
                    <div className="experienceRole">Shift Supervisor</div>
                    <div className="experienceYear">Jul 2021 - Nov 2023</div>
                </div>
            </div>
        </section>
    )
}

export default Experience