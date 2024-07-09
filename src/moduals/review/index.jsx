import React from 'react'
import '../../style/main.scss'
import './review.scss'

export default function Review() {
  return (
    <div className="review" id='contect'>
        <h3>Review</h3>
        <div className="container">
            <input type="email" placeholder='Enter Email'/>
            <textarea name="textare" placeholder='Enter Experience' id=""></textarea>
            <button>Submit</button>
        </div>
    </div>
  )
}
