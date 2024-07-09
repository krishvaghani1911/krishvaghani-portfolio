import React from 'react'
import '../../../style/main.scss'
import './header.scss'

export default function Header() {
  return (
    <div className='header'>
        <div className="container">
            <button id='main'><h1>Krish Vaghani</h1></button>
            <div className="menu">
                <div className="about"><a href='#about'>About</a></div>
                <div className="project"><a href='#resume'>Resume</a></div>
                <div className="content"><a href='#contect'>Content</a></div>
            </div>
        </div>
    </div>
  )
}