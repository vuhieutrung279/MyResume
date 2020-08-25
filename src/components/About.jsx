import React from 'react'

import AboutImg from '../assets/about-img.svg';
import SkillImg from '../assets/skill-img.png';
import Experience from './Experience';
import dbExp from '../data/experience.json';
import resume from '../assets/CV-FrontEnd-VuHieuTrung.pdf';
function About() {
    return (
        <div className="about">
            <div className="about-me">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img src={AboutImg} alt="about me"/>
                        </div>
                        <div className="col-md-6">
                            <div className="about-me__content">
                                <h2>About Me</h2>
                                <p>Hello, I'm Vu Trung. As a Front End Developer with more than 1 year, I want to contribute my skills to the company and I hope I can improve myself to become a professional Front End developer.</p>
                                <a download={resume} rel="noopener noreferrer" target="_blank" href={resume} className="about-me__cv">Download CV <i className="fas fa-download"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="experience">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Education</h3>
                            <div className="experience__content">
                                <Experience exp={dbExp[2]} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3>Work Experience</h3>
                            <div className="experience__content">
                                <Experience exp={dbExp[0]} />
                                <Experience exp={dbExp[1]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>TECHNICAL SKILLS</h3>
                            <div className="skill__list">
                                <span>HTML5</span>
                                <span>CSS3</span>
                                <span>Javascript / ES6</span>
                                <span>jQuery</span>
                                <span>SCSS (BEM)</span>
                                <span>Bootstrap</span>
                                <span>AngularJS</span>
                                <span>ReactJS</span>
                                <span>C#</span>
                                <span>Git</span>
                                <span>Photoshop</span>
                            </div>
                            <h3>PERSONAL SKILLS</h3>
                            <div className="skill__list">
                                <span>Willingness to learn</span>
                                <span>Teamwork</span>
                                <span>Active listening</span>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={SkillImg} alt="skill"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <p>Copyright @ 2020 by <span>Vu Hieu Trung</span></p>
            </div>
        </div>
    )
}

export default About
