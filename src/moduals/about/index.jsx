import React from 'react'
import './about.scss'
import img2 from '../../assets/img2.jpg'

export default function About() {
    return (
        <div className="about" id='about'>
            <h3>About Me </h3>
            <div className="container">
                <div className="about-cont">
                    <div className="about-img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="about-p">
                        <h4>My Intro</h4>
                        <p>I'm Krish Vaghani, a html-css Developer. I create stunning, user-friendly websites through customization, plugin development, and optimization. With a dedication to quality and client satisfaction, let’s collaborate and turn your ideas into reality.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
