import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Joshua Iruobe's Portfolio</h1> 
      <div className="avatar">
        <img src="IMG_0345.JPG" alt="" height="200px"/>
      </div>
      <hr />
      <p className="header"><span style={{color: '#61d4e8'}}>Web developer,</span> passionate about clean design and code<span style={{color: '#61d4e8'}}>.</span></p>
      <hr />
      <h2>Bio</h2>
      <p>
        I’m a front-end web developer with a passion for building clean, responsive, 
        and intuitive interfaces. My journey into tech started with a simple goal: 
        to bring ideas to life on the web. Since then, I’ve focused on mastering 
        tools like React, JavaScript, and CSS to create modern, accessible user 
        experiences. Beyond coding, I love exploring design trends, learning new 
        technologies, and collaborating with people who care about great user 
        experiences. I believe good design isn’t just about how something looks - 
        it’s about how it feels to use.
      </p>
      <p>
        I’m excited to bring that mindset to a team where I can build, learn, and 
        grow.
      </p>
      <h2>Projects</h2>
      <button className="project"><a href="https://todolist-jiruobe.netlify.app/">To Do List</a></button>
      <button className="project"><a href="https://ji-calculator.netlify.app/">Calculator</a></button>
      <button className="project"><a href="https://weather-jiruobe.netlify.app/">Weather App</a></button>
      <h2>Skills</h2>
      <ul>
        <li>React.js</li>
        <li>Problem-solving</li>
        <li>Responsive Design</li>
        <li>State management</li>
        <li>Git & workflow</li>
      </ul>
      <h2>Contacts</h2>
      <a href="mailto:iruobejoshua96@gmail.com">
        <i className="fa-solid fa-envelope"></i>
      </a>

      <a href="https://www.linkedin.com/in/joshua-iruobe-aa22a81b3/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a href="https://github.com/iruobej" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>

      
      <a href="tel:+447535293713">
        <i className="fa-solid fa-phone"></i>
      </a>
      <span>: +447535293713</span>
    </>
  )
}

export default App
