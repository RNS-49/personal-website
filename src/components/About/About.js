import React from 'react'
import './about.css'
import profile from '../../images/profile.png'
import HeyThere from '../../images/HeyThere.png'
import Resume from '../../Resume/Resume.pdf'

function About() {
  return (
    <div>
      <section className='container-fluid'>


        <div className=' about-one'>
          <img className='heythere' src={HeyThere} alt="" />
          <h3 className='my-name'>IT'S ME RNS-49</h3>
          <h6 className='about-title'>Biography</h6>
          <p className='self-intro'>Hello! I'm <span>Renjith N S</span>, a passionate web developer and a Computer Engineering student from Kerela, Ernakulam. My journey in tech started with a deep curiosity about how websites work, which led me to pursue formal education and hands-on experience in programming and development.

            I completed my SSLC at GHS Palissery, my Plus Two at PSHSS Thirumudikkunnu, and a Diploma in Computer Engineering from GPTC Perumbavoor. My academic background, combined with my self-driven projects, has helped me gain a solid foundation in front-end and back-end technologies.

            I'm skilled in various web development tools and languages, including HTML , CSS , BOOTSTRAP , JAVASCRIPT , REACT JS , NODE JS , EXPRESS and MONGODB. Recently, I've developed projects like a custom OTT platform and a shopping cart application, utilizing MongoDB, Express and Frontend tools. I'm always keen to expand my skill set and am currently learning more about full-stack development to become a versatile developer.

            Beyond coding, I am an avid learner, reader, and badminton enthusiast. I'm always open to exploring new ideas and love engaging in projects that challenge my creativity and technical abilities.
          </p>
        </div>

        <div className=' about-two'>
          <img className='profile' src={profile} alt="" />
          <h1 className='speciality'>Mernstack Web Developer</h1>

          <a href={Resume}><button className='btn btn-outline-success buttons'>View Resume</button></a>
          
          <a href="https://www.linkedin.com/in/renjith-n-s"><button className='btn btn-outline-primary buttons'><i class="fa-brands fa-linkedin main-icons"></i> Linkedin</button></a>
          
          <a href="https://github.com/RNS-49"><button className='btn btn-outline-dark buttons'><i class="fa-brands fa-square-github main-icons"></i>Github</button></a>
          
          <h6 className='other-links'>Other social links</h6>
          <a href="https://m.facebook.com/renjith.ns.96/"><i class="fa-brands fa-square-facebook fa-beat other-social fb"></i></a>
          <a href="https://www.instagram.com/rns_4_9_/"><i class="fa-brands fa-square-instagram fa-shake other-social insta"></i></a>
          <a href="https://mobile.x.com/Renjith19946692"><i class="fa-brands fa-square-x-twitter fa-bounce other-social x"></i></a>
          <a href="mailto:renjithns121@gmail.com"><i class="fa-solid fa-envelope fa-shake other-social"></i></a>
          
        </div>



      </section>
    </div>
  )
}

export default About
