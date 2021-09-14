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
                        <a className="btn" href="https://www.keepandshare.com/doc21/114040/resume-5-pdf-45k?da=y"><span>Resume</span></a>
                    </div>
                    <div className="link-box-container">
                        <a href="#about"><div className="link-box">About</div></a>
                        <a href="#work"><div className="link-box">Work Experience</div></a>
                        <a href="#projects"><div className="link-box">Projects</div></a>
                    </div>
                </div>
            </header>
            <div className="about" id="about">
                <div className="left-space">
                    <div className="about-content">
                        <h1>I code all day</h1>
                        <p>I am a driven web developer from South Florida.
                            I enjoy turning complex problems into elegant solutions.
                            I take pride in producing efficient, well-organized code
                            that future devs can read with ease.
                            When I'm not hyperfocusing on the computer,
                            you can find me reaching for perfection in the dance studio.

                        </p>

                    </div>
                </div>
                <div className="middle-space">
                    
                </div>
                <div className="right-space">
                    <div className="link-box"></div>
                    <div className="link-box">
                        <p>and code all night</p>
                        </div>
                    <div className="link-box"></div>
                </div>
            </div>
            <div className="work" id="work">
                <div className="work-content">
                    <h3>Web Team</h3>
                    <p>Florida Department of Health</p> 
                    <p className="location">Tallahassee, FL</p>
                    
                    <ul>
                        <li>Lead application developer of custom internal application to modernize Certificate and Domain Name management process</li>
                        <li>
                        Designed, developed, and deployed an internal web application for the Web Team’s Domain Name and Certificate management process using JavaScript, HTML5, CSS3 + Bootstrap, NodeJS, and MongoDB Realm.
                        </li>
                        <li>
                        Configured, administer, and actively manage Atlas cloud environment in MongoDB.  
                        </li>
                        <li>Administered database access roles and set up authentication using a custom solution with Microsoft MSAL authentication and MongoDB Realm.</li>
                        <li>
                        Created an FDOH Genealogy site using NodeJS, Azure Functions, MongoDB, ReactJS, HTML5, and CSS3.
                        </li>
                        
                    </ul>
                </div>
                <h2>Work Experience</h2>
 
                
            </div>
            <div className="projects">
            <h2>Projects</h2>

                    <div className="text-left" id="projects">
                        <h3>UriarteVisa.com</h3>
                        <p>July 2020 to Present</p>
                        <ul>
                            <li>Building full stack application to automate a legal filing process
                            </li>
                            <li>Developing user interface using ReactJS, Material UI, and custom CSS 
                            </li>
                            <li>Developing express server and PostgreSQL database to handle all
                                form submissions
                            </li>
                            <li>Deployed the website using an EC2 container in AWS</li>
                            
                        </ul>
                        <h3>Certificate and Domain Name Management Application</h3>
                        <ul>
                            <li>Lead application developer of custom internal application to
                                modernize Certificate and Domain Name management process                            
                            </li>
                            <li>Setup MongoDB Atlas environment and performed a database migration</li>
                            <li>Administered database access roles and set up authentication
                                using a custom solution with Microsoft MSAL authentication and MongoDB Realm</li>
                            <li>Developed custom serverless functions in MongoDB Realm
                                to handle database queries
                            </li>
                            <li>Designed and developed user interface  
                                using HTML5, CSS3, and JavaScript and integrated it with the backend in
                                MongoDB Realm</li>
                        </ul>
                        <h3>Florida Department of Health Ancestry Prototype</h3>
                        <ul>
                            <li>Developed a single-page application for a Geneology site</li>
                            <li>Front-end developed in ReactJS, HTML5, CSS3, and Javascript</li>
                            <li>Back-end using Azure functions API, Azure static web apps, and Microsoft MSAL authentication</li>
                            <a target="_blank" rel="noopener noreferrer" className="demo-btn" href="https://lively-hill-0d8298410.azurestaticapps.net/">Click to see the demo</a>
                            <p><small>*Please note that many features will not work 
                                due to authentication being restricted to FDOH users.</small>
                            </p>
                        </ul>
                    </div>
                    
                
                
            </div>
            <div className="ksa">
                <Skills />
            </div>
            <div className="contact-info">
                <a href="mailto:gina.auw@gmail.com"><div className="link-box">gina.auw@gmail.com</div></a>
                <a href="https://github.com/auriartew/Portfolio"><div className="link-box">Github</div></a>
                <a href="https://www.keepandshare.com/doc21/113919/resume-2021-pdf-555k?da=y"><div className="link-box">Resume</div></a>
            </div>
                
            </div>
        
    
    )
}