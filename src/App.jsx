import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'

import jsLogo from "./images/js.png";
import reactLogo2 from "./images/react.png";
import tsLogo from "./images/ts.png";
import nodeLogo from "./images/nodejs.png";
import viteLogo2 from "./images/vite.jfif";
import htmlLogo from "./images/html.png";
import cssLogo from "./images/css.webp";
import pythonLogo from "./images/python.jfif";
import javaLogo from "./images/java.png";
import kotlinLogo from "./images/kotlin.jfif";
import cppLogo from "./images/c++.webp";
import sqlLogo from "./images/sql.jfif";

function App() {

  return (
    <> 
      <Navbar></Navbar>
      <section id="home" className='hero'>
        <div className="hero-text">
          <h1>Hi there! I'm <span style={{color: '#61d4e8'}}>Joshua Iruobe</span></h1> 
          <p className="header">A <span style={{color: '#61d4e8'}}>web developer,</span> passionate about clean design and code<span style={{color: '#61d4e8'}}>.</span></p>
          <a 
            href="https://drive.google.com/file/d/19VNgkZbeCFD0H9aeNKU5zpazka4IPxpP/view?usp=sharing"
            className='cvButton'
            target='_blank'
          >
            <i className="fas fa-file"></i>
            View CV
          </a>
        </div>
        <div className="avatar">
          <div className="hero-image">
            <img src="/portfolio_pic.JPG" alt="" height="200px"/>
          </div>
        </div>
      </section>
      <div style={{padding: 12}}>
        <section id="bio">
          <h1>Bio</h1>
          <p>Hi there! I'm Joshua Iruobe, a Software Engineer based in the United Kingdom.</p>
          <p>
            I have been in tech from 13, having cultivated an interest for it from using websites and being fascinated with
            the design and engineering behind them.
          </p>
          <p>
            That interest grew enough for me to take up Computer Science from GCSEs all the way to graduating with Bachelor's
            Degree in Computer Science Bsc from Loughborough University.
          </p>
          <p>
            Currently, I am a recent graduate looking for a company where I can use my expertise to help people through tech.
          </p>
          <h1>Tech Stack</h1>
          <p>Here is a list of all the technologies I have worked with: </p>
          <div className="tech-stack">
            <div className="tech-stack">
              <div className="tech-item">
                <img src={jsLogo} alt="JavaScript logo" />
                <span className="tech-label">JavaScript</span>
              </div>

              <div className="tech-item">
                <img src={reactLogo2} alt="React logo" />
                <span className="tech-label">React</span>
              </div>

              <div className="tech-item">
                <img src={tsLogo} alt="TypeScript logo" />
                <span className="tech-label">TypeScript</span>
              </div>

              <div className="tech-item">
                <img src={nodeLogo} alt="Node.js logo" />
                <span className="tech-label">Node.js</span>
              </div>

              <div className="tech-item">
                <img src={viteLogo2} alt="Vite logo" />
                <span className="tech-label">Vite</span>
              </div>

              <div className="tech-item">
                <img src={sqlLogo} alt="SQL logo" />
                <span className="tech-label">SQL</span>
              </div>

              <div className="tech-item">
                <img src={htmlLogo} alt="HTML logo" />
                <span className="tech-label">HTML</span>
              </div>

              <div className="tech-item">
                <img src={cssLogo} alt="CSS logo" />
                <span className="tech-label">CSS</span>
              </div>

              <div className="tech-item">
                <img src={pythonLogo} alt="Python logo" />
                <span className="tech-label">Python</span>
              </div>

              <div className="tech-item">
                <img src={javaLogo} alt="Java logo" />
                <span className="tech-label">Java</span>
              </div>

              <div className="tech-item">
                <img src={kotlinLogo} alt="Kotlin logo" />
                <span className="tech-label">Kotlin</span>
              </div>

              <div className="tech-item">
                <img src={cppLogo} alt="C++ logo" />
                <span className="tech-label">C++</span>
              </div>
            </div>
          </div>
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
            <button className="project"><a href="https://movie-master-ji.netlify.app/">Movie Master</a></button>
            <button className="project"><a href="https://weather-jiruobe.netlify.app/">Weather App</a></button>
            <button className="project"><a href="https://ji-calculator.netlify.app/">Calculator</a></button>
            <button className="project"><a href="https://todolist-jiruobe.netlify.app/">To Do List</a></button>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <form action="">
            <input 
              type="text" 
              placeholder='Heading'
            />
            <input 
              type="text" 
              placeholder='Enter your message'
            />
            <button type="submit">Send</button>

          </form>
        </section>
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
      </div>
    </>
  )
}

export default App
