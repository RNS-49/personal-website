import React from 'react'
import './contact.css'



function Contact() {
  return (
    <div>
      <section className='container-fluid'>
       
      <div class="contact-form">
    <h2>Contact Me</h2>
    <form action='/' method='post'>
        <input type="text" placeholder="Enter your name" required/>
        <input type="email" placeholder="Enter your email" required/>
        <textarea placeholder="Send a message"></textarea>
        <div class="button-group">
            <button className='btn btn-outline-success' type="submit">Submit</button>
            <button className='btn btn-outline-danger' type="reset">Reset</button>
        </div>
    </form>
    
  

</div>

      </section>
    </div>
  )
}

export default Contact
