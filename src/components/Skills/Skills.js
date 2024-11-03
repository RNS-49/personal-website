import React from 'react'
import './skills.css'
const violet = '#9400d3';
const skyblue = '#87ceeb';
const pythonblue = '#FFD43B';
const databaseicon = '#4682B4';

function Skills() {
  return (
    <div>
      <h1 className='skill-head'>MY SKILLS</h1>
      <section class="skills-section">
  
  <div class="skills-container">
    <div class="skill-card">
    <i class="fa-brands fa-html5 fa-beat text-danger"></i>
      <p>HTML5</p>
    </div>
    <div class="skill-card">
    <i class="fa-brands fa-css3-alt fa-shake text-primary"></i>
      <p>CSS3</p>
    </div>
    <div class="skill-card">
    <i class="fa-brands fa-js fa-fade text-warning"></i>
      <p>JavaScript</p>
    </div>
    <div class="skill-card">
    <i class="fa-brands fa-python fa-bounce text-warning" style={{style:pythonblue}}></i>
      <p>Python</p>
    </div>
    <div class="skill-card">
    <i class="fa-brands fa-java fa-flip text-danger" ></i>
      <p>Java</p>
    </div>
    <div class="skill-card">
    <i class="fa-solid fa-c fa-bounce text-primary"></i>
      <p>Language</p>
    </div>
    <div class="skill-card">
    <i class="fa-brands fa-bootstrap fa-fade" style={{color:violet}}></i>
      <p>Bootstrap</p>
    </div>
    <div class="skill-card">
    <i class="fa-brands fa-node fa-beat-fade text-success"></i>
      <p>Node js</p>
    </div>
    <div class="skill-card">
    <i class="fa-solid fa-e fa-flip text-dark "></i>
      <p>Express js</p>
    </div>
    <div class="skill-card">
    <i class="fa-brands fa-react fa-spin" style={{color:skyblue}}></i>
      <p>React js</p>
    </div>
    <div class="skill-card">
    <i class="fa-solid fa-database fa-shake" style={{color:databaseicon}}></i>
      <p>MongoDB</p>
    </div>
   
  </div>
</section>
    </div>
  )
}

export default Skills
