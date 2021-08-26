import React from "react";

export default function Skills() {
    return (
        <main className="container">
        <h1 className="skill-title">Here's What I can do</h1>
        <div className="skill-container">
            <div className="detailed-skills">
                <h2 className="default-title skill-subheading">Front-end</h2>
                <div className="items">
                    <div className="column">
                        <p>HTML5</p>
                        <div class="skill-bar">
                            <div class="skills html">90%</div>
                        </div>
                        <p>CSS</p>
                        <div class="skill-bar">
                            <div class="skills css">80%</div>
                        </div>
                        <p>JavaScript</p>
                        <div class="skill-bar">
                            <div class="skills js">85%</div>
                        </div>
                    </div>
                    <div className="column">
                        <p>ReactJs</p>
                        <div class="skill-bar">
                            <div class="skills react">80%</div>
                        </div>
                        <p>Bootstrap</p>
                        <div class="skill-bar">
                            <div class="skills bootstrap">90%</div>
                        </div>
                        <p>jQuery</p>
                        <div class="skill-bar">
                            <div class="skills jquery">60%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detailed-skills">
                <h2 className="default-title skill-subheading">Back-end</h2>
                <div className="items">
                    <div className="column">
                        <p>Nodejs</p>
                        <div class="skill-bar">
                            <div class="skills nodejs">70%</div>
                        </div>
                        <p>Microsoft Azure</p>
                        <div class="skill-bar">
                            <div class="skills azure">50%</div>
                        </div>
                    </div>
                    <div className="column">
                        <p>Express</p>
                        <div class="skill-bar">
                            <div class="skills express">50%</div>
                        </div>
                        <p>MongoDB</p>
                        <div class="skill-bar">
                            <div class="skills mongodb">80%</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="detailed-skills">
                <h2 className="default-title">Accessibility Tools</h2>
                <div className="items">
                    <div className="column">
                        <p>Siteimprove</p>
                        <p>NVDA Screen reader</p>
                    </div>
                </div>
            </div>
            <div className="detailed-skills">
                <h2 className="default-title">Development and Design Tools</h2>
                <div className="items">
                    <div className="column">
                        <p>Photoshop</p>
                        <p>VS Code with Azure integration</p>
                        <p>Github</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}