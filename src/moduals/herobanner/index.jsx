import React from 'react'
import './herobanner.scss'
import '../../style/main.scss'
import img3 from '../../assets/img3.jpg'

export default function Herobanner() {
  return (
    <div className="herobanner">
        <div className="container">
            <div className="herobanner-cont">
                <p>Hello I am </p>
                <h2>Krish Vaghani</h2>
                <p className='p'>Full-Stack Web Developer</p>
                <p>As a highly skilled and experienced freelance web developer, I bring a passion for crafting dynamic and visually stunning websites to every project I undertake.</p>
                <button>Let's talk</button>
            </div>
            <div className="herobanner-img">
                <img src={img3} alt="" />
            </div>
        </div>  
    </div>
  )
}