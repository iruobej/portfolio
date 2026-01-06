import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <> 
      <Navbar></Navbar>
      <div style={{padding : 12}}>
        <section id="home" className='hero'>
          <div className="hero-text">
            <h1>Hi there! I'm <span style={{color: '#61d4e8'}}>Joshua Iruobe</span></h1> 
            <button className='cvButton'>
              <i className="fas fa-file"></i>
              <a href="https://drive.google.com/file/d/19VNgkZbeCFD0H9aeNKU5zpazka4IPxpP/view?usp=sharing">
                View CV
              </a>
            </button>
          </div>
          <div className="avatar">
            <div className="hero-image">
              <img src="/portfolio_pic.JPG" alt="" height="200px"/>
            </div>
          </div>
          <hr />=
        </section>
        <section id="bio">
          <p className="header"><span style={{color: '#61d4e8'}}>Web developer,</span> passionate about clean design and code<span style={{color: '#61d4e8'}}>.</span></p>
          <p>
            <h2>Bio</h2>
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
        </section>
        <section id="education">

        </section>
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>React.js</li>
            <li>Problem-solving</li>
            <li>Responsive Design</li>
            <li>State management</li>
            <li>Git & workflow</li>
          </ul>
        </section>
          <section id="projects">
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
        </section>
        <section id="contact">
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
        </section>
      </div>
    </>
  )
}

export default App
