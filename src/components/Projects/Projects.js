import React from 'react'
import './projects.css'
import animated from '../../Project_images/animated.png'
import company from '../../Project_images/company.png'
import eseller from '../../Project_images/eseller.png'
import streamx1 from '../../Project_images/streamx1.png'
import streamx2 from '../../Project_images/streamx2.png'
import yummiq from '../../Project_images/yummiq.png'
import track1 from '../../Project_images/track1.jpeg'
import track2 from '../../Project_images/track2.jpeg'
import track3 from '../../Project_images/track3.jpeg'
import face1 from '../../Project_images/face1.jpeg'
import face2 from '../../Project_images/face2.jpeg'
import ecommerce1 from '../../Project_images/ecommerce1.png'
import ecommerce2 from '../../Project_images/ecommerce2.png'
import ecommerce3 from '../../Project_images/ecommerce3.png'
import ml1 from '../../Project_images/ml1.jpeg'
import ml2 from '../../Project_images/ml2.jpeg'

function Projects() {
  return (
    <div>
      <section className='container-fluid'>
        <h1 className='main-title'>PROJECTS</h1>
        <div className='row p-sec'>
          <div className='col-lg-6'>
            <h5 className='project-head'>Static Websites</h5>
            <p className='p-description'>Designed and developed a series of static websites to showcase products, services, and brands, as well as to support e-commerce and OTT platforms. Each project leverages HTML, CSS, Bootstrap, and React.js to create visually appealing, responsive, and user-friendly layouts. These sites are optimized for various screen sizes, ensuring seamless navigation on desktops, tablets, and mobile devices. Through clean design and structured code, each website effectively enhances user engagement and promotes the respective products and services</p>
            <img className='p-image1' src={animated} alt="" />
          <img className='p-image1' src={streamx1} alt="" />
          <img className='p-image1' src={company} alt="" />
          <img  className='p-image1' src={yummiq} alt="" />
          <img className='p-image1' src={eseller} alt="" />
          <img className='p-image1' src={streamx2} alt="" />
            <h5 className='project-head'>TrackNspot Android Application</h5>
            <p className='p-description'>Developed TrackNspot, an Android application created as a college major project, designed to provide efficient location tracking and user management. Built using Java and Android Studio, the app allows users to pinpoint locations, track real-time movements, and share locations securely. With features like interactive maps, secure login, and user-friendly navigation, TrackNspot is geared toward safety and convenience. This project helped me strengthen my mobile development skills and gain hands-on experience with Android app development.</p>
          <img className='p-image2' src={track1} alt="" />
          <img className='p-image2' src={track2} alt="" />
          <img className='p-image2' src={track3} alt="" />
          </div>
          <div className='col-lg-6'>
            <h5 className='project-head'>Face Recognition System Using Python</h5>
            <p className='p-description'>Developed a face recognition system as a college mini project, utilizing Python and libraries like OpenCV. This project detects and identifies human faces in real-time, demonstrating the fundamentals of computer vision and image processing. The system was built with the capability to recognize pre-trained faces, allowing for potential applications in security and user authentication. This hands-on project enhanced my understanding of machine learning concepts and practical coding in Python.</p>
             <img className='p-image3' src={face1} alt="" />
             <img className='p-image3' src={face2} alt="" />
            <h5 className='project-head'>Shopping Cart Backend</h5>
            <p className='p-description'>Built a robust shopping cart backend system using Node.js, Express.js, and MongoDB to handle data storage and processing efficiently. This project includes essential e-commerce features, such as user authentication, product management, cart functionality, and order processing. Leveraging MongoDB for data persistence and Express.js, the backend is designed for scalability and secure handling of user data. This project enhanced my understanding of backend development and database integration.</p>
             <img className='p-image4' src={ecommerce1} alt="" />
             <img className='p-image4' src={ecommerce2} alt="" />
             <img className='p-image4' src={ecommerce3} alt="" />
            <h5 className='project-head'>Music Recommender Using Machine Learning</h5>
            <p className='p-description'>Developed a music recommender system using Python and machine learning algorithms to personalize music suggestions based on user preferences. Leveraging data processing and ML libraries such as Pandas, NumPy, and Scikit-Learn, this system analyzes users age, gender and recommends songs that align with their tastes. This experience reinforced my skills in data handling, model building, and machine learning applications.</p>
             <img className='p-image4' src={ml1} alt="" />
             <img className='p-image4' src={ml2} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
