import React from 'react'
import './certifications.css'
import web from '../../Certicates_images/web.jpg'
import python from '../../Certicates_images/python.jpg'
import flutter from '../../Certicates_images/flutter.jpg'
import internshala from '../../Certicates_images/internshala.jpg'


function Certifications() {
  return (
    <div>

      <h1 className='certificate-head'>Certifications</h1>
      <section className='container-fluid certificate-sec'>
        <div className='row card-sec'>

          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='card'>
              <img className='certificates' src={web} alt="" />
              <div className='card-body'>
                <p className='certificate-des'>Completed a comprehensive 61-hour course covering the fundamentals and advanced concepts of full-stack web development. Gained proficiency in HTML, CSS, JavaScript, Node.js, MongoDB, and more, enabling me to build responsive, dynamic websites from scratch.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='card'>
              <img className='certificates' src={python} alt="" />
              <div className='card-body'>
                <p className='certificate-des'>Successfully completed an intensive 56-hour Python bootcamp that focused on Python programming, algorithms, data structures, and real-world applications. Enhanced skills in backend development, data analysis, and automation, solidifying expertise in Python for professional use.</p>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='card'>
              <img className='certificates' src={flutter} alt="" />
              <div className='card-body'>
                <p className='certificate-des'>Completed flutter internship at Wecode Life. Demonstrated a strong work ethic, professionalism, and technical knowledge, earning recognition for dedication and performance. This experience provided hands-on exposure to industry practices and collaborative teamwork in a tech environment.</p>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='card'>
              <img className='certificates' src={internshala} alt="" />
              <div className='card-body'>
                <p className='certificate-des'>Participated in india's largest online learning event - 'World Education day Fair 2023' organized by Internshala Trainings.</p>
              </div>
            </div>
          </div>


        </div>
      </section>

    </div>
  )
}

export default Certifications
