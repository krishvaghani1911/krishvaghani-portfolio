import React from 'react'
import './resume.scss'
import img1 from '../../assets/img1.png'

export default function Resume() {
    return (
        <div className="resume" id='resume'>
            <h3 className='h3'>Resume</h3>
            <div className="container">
                <div className="card">
                    <div className="imgbox">
                        <div></div>
                    </div>
                    <div className="detail">
                        <h2>Education</h2>
                        <p>Computer engineering of Diploma</p>
                        <ul>
                            <li>From Bhagwan Mahavir University</li>
                            <li>Completed in 2024 with 7.3 C.G.P.A.</li>
                        </ul>
                        <h3>Full Stack</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
