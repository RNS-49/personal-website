import React from 'react'
import './education.css'

function Education() {
  return (
    <div>
      <section className='container-fluid table-section'>
        <div >
          <h1 className='table-title'>Education Qualifications</h1>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Qualification</th>
                <th>School/Collage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2019</td>
                <td>SSLC</td>
                <td>Ghs Palissery</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>PlusTwo</td>
                <td>Pshss Thirumudikkunnu</td>
              </tr>
              <tr>
                <td>2024</td>
                <td>Diploma in Computer Engineering</td>
                <td>Gptc Perumbavoor</td>
              </tr>
            </tbody>
          </table>

        </div>
      </section>
      
    </div>
  )
}

export default Education

