import React from 'react'
import './Apply.css'

export default function Contact() {
  return (
    <div>
      <h3 className="subhead">contact</h3>

      <div className="form-div">

      <form className='form' action="/" method="post">
        <label htmlFor="email">Email</label>
        <input type="email" id='email' placeholder='your mail here!' />
        
        <label htmlFor="email">Phone</label>
        <input type="number" id='phone' placeholder='your contact here!' />

        <label htmlFor="email">Desscription</label>
        <input type="text" id='desc' placeholder='related information!' />

        <button type='submit' formAction='submit' id='submit'></button>

      </form>
      </div>
    </div>
  )
}
