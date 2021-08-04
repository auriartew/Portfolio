import React from 'react';
import icosahedron from './images/icosahedron.svg';
import Skills from './Skills.js';



export default function Home() {
    return (
        <div className="container">
            <header role="banner" className="intro-container">
                <div className="left-space">
                    
                </div>
                <div className="middle-space">
                    <p className="header-name">Angelina Uriarte</p>
                </div>
                <div className="right-space">
                    <div className="intro-content">
                        <p className="intro-text">
                            I'm a Full Stack developer 
                            who is dedicated to delivering high-quality, scalable, 
                            predictable, and high-performance web applications.
                            <em> Perfectionist</em>, <em>Enthusiastic</em> and always <em>
                                Optimistic</em>.
                        </p>
                        <a className="btn" href="https://www.keepandshare.com/doc21/113919/resume-2021-pdf-555k?da=y"><span>Resume</span></a>
                    </div>
                    <div className="link-box-container">
                        <a href="#about"><div className="link-box">About</div></a>
                        <a href="#work"><div className="link-box">Work Experience</div></a>
                        <a href="#projects"><div className="link-box">Projects</div></a>
                    </div>
                </div>
            </header>
            <div className="about">
                <div className="left-space">
                    <div className="about-content">
                        <h1>"Don’t wish it were easier. Wish you were better."</h1>
                        <p>I am a driven web developer from South Florida.
                            I enjoy turning complex problems into elegant solutions.
                            I take pride in producing efficient, well-organized code
                            that future devs can read with ease.
                            When I'm not hyperfocusing on the computer,
                            you can find me reaching for perfection in the dance studio.

                        </p>

                    </div>
                </div>
                <div className="middle-space" id="about">
                    
                </div>
                <div className="right-space">
                    <div className="link-box"></div>
                    <div className="link-box">
                        <p>There is nothing I <i>can't</i> do. With enough dedication and work, 
                        no problem is too complex to solve.</p>
                        </div>
                    <div className="link-box"></div>
                </div>
            </div>
            <div className="work" id="work">
                <div className="left-space">
                    <h2>Work Experience</h2>
                    <div className="work-content">
                        <h3>Web Administration Team</h3>
                        <p>Florida Department of Health</p> 
                        <p className="location">Tallahassee, FL</p>
                        
                        <ul>
                            <li>
                            Designed, developed, and deployed an internal web application for managing the Web Administration Team’s Domain Name and Certificate Databases using JavaScript, HTML5, CSS3 + Bootstrap, NodeJS, and MongoDB Realm.
                            </li>
                            <li>
                            Configured, administer, and actively manage Atlas cloud environment in MongoDB.  
                            </li>
                            <li>
                            Created an FDOH Genealogy protype site using NodeJS, Microsoft Azure, MongoDB, ReactJS, HTML5, and CSS3.
                            </li>
                            <li>
                            Provide technical advising to meet customer requirements and develop client requested solutions from concept to code.
                            </li>
                            <li>
                            Review services offered by Microsoft Azure and provide recommendations based on project requirements.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="middle-space">
                    
                </div>
                <div className="right-space">
                    <div className="link-box"></div>
                    <div className="link-box"></div>
                    <div className="link-box"></div>
                </div>
            </div>
            <div className="projects">
                <div className="text-container">
                    <div className="text-left" id="projects">
                        <h2>Projects</h2>
                        <h3>UriarteVisa.com</h3>
                        <p>July 2020 to Present</p>
                        <ul>
                            <li>Designed responsive, mobile-friendly business landing page
                                and contact form
                            </li>
                            <li>Created an Express server to handle form submission and send an email
                                to customers following signup
                            </li>
                            <li>Deployed the website using an EC2 container in AWS</li>
                            <li>Currently developing user authentication backend and database pipeline
                                in DynamoDB
                            </li>
                        </ul>
                        <h3>Certificate and Domain Name Management Application</h3>
                        <ul>
                            <li>Lead project manager in migrating Access database in MongoDB Atlas</li>
                            <li>Modernized outdated Certificate and Domain Name management process
                                by architecting a custom application
                            </li>
                            <li>Built backend database and serverless functions in MongoDB Realm</li>
                            <li>Front-end user interface designed using HTML5, CSS3, and JavaScript</li>
                        </ul>
                        <h3>Florida Department of Health Ancestry Prototype</h3>
                        <ul>
                            <li>Developed a pilot site for a potential Geneology site for Florida Residents</li>
                            <li>Front-end developed in ReactJS, HTML5, CSS3, and Javascript</li>
                        </ul>
                    </div>
                    <div className="text-right">
                        <div className="icon-container"><img src={icosahedron} alt="" className="filter-green"></img></div>
                    </div>
                </div>
                
            </div>
            <div className="ksa">
                <Skills />
            </div>
            <div className="contact-info">
                <a href="mailto:gina.auw@gmail.com"><div className="link-box">gina.auw@gmail.com</div></a>
                <a href="https://github.com/auriartew/Portfolio"><div className="link-box">Gitlab</div></a>
                <a href="https://www.keepandshare.com/doc21/113919/resume-2021-pdf-555k?da=y"><div className="link-box">Resume</div></a>
            </div>
                
            </div>
        
    
    )
}