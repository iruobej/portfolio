import { useState } from 'react'
import { motion } from 'framer-motion' //for delayed animation on scrolls
import Navbar from './components/Navbar'
import ProjectList from './components/ProjectList'
import ContactLinks from './components/ContactLinks'
import TechStack from './components/TechStack'
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
import LUlogo from "./images/LU.png";
import bethsLogo from "./images/beths.jpg";

function App() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function sendContact(e) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject,
          message,
          fromName,
          fromEmail,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send");
      }

      setSuccess(true);
      setSubject("");
      setMessage("");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
        <section id="home" className='hero'>
        
          <div className="hero-text">
            <h1>Hi there! I'm <span style={{color: '#61d4e8'}}>Joshua Iruobe</span></h1> 
            <p className="header">A <span style={{color: '#61d4e8'}}>web developer,</span> passionate about clean design and code<span style={{color: '#61d4e8'}}>.</span></p>
            <a 
              href="https://docs.google.com/document/d/1gSHdRUAHyhVCH_itjNNq6FME_L04IAOKp86-Z2nG8vM/edit?usp=sharing"
              id='cvButton'
              target='_blank'
            >
              <i className="fas fa-file"></i>
              View CV
            </a>
            <ContactLinks/>
          </div>
             
          <div className="avatar">
            <div className="hero-image">
              <img src="/portfolio_pic.JPG" alt="" height="200px"/>
            </div>
          </div>
      </section>
    </motion.div> 
      <div style={{padding: 12}}>
        <section id="bio">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
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

          <br />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h1>Tech Stack</h1>
            <p>Here is a list of all the technologies I have worked with: </p>
            <TechStack />
           </motion.div> 
      </section>
        <section id="projects">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h1>Projects</h1>
            <div className="project-container">
              <ProjectList/>
            </div>
          </motion.div> 
        </section>
        <section id="education">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h1>Education</h1>
            <div className="tech-item">
              <img src={LUlogo} alt="Lough Uni Logo" className="tech-item"/>
              <h2>Loughborough University</h2>
            </div>
            <p>Computer Science BSc - Grade 2:1</p>
            <br />
            <hr />
            <br />
            <div className="tech-item">
              <img src={bethsLogo} alt="Beths Grammar School Logo" />
              <h2>Beths Grammar School</h2>
              <p>A Levels: Mathematics (B), Computer Science (A), Sociology (A)</p>
            </div>
           </motion.div> 
        </section>
        <section id="skills">
          <h1>Skills</h1>

            <hr />
            <div className="skills-container">
              <div className="skill">
                <i className="fa-solid fa-code"></i>
                <h2>Frontend</h2>
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="skill">
                <i class="fa-solid fa-database"></i>
                <h2>Backend</h2>
                <ul>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>pgAdmin</li>
                </ul>
              </div>
              <div className="skill">
                <i class="fa-solid fa-wrench"></i>
                <h2>Tools</h2>
                <ul>
                  <li>AI: ChatGPT, Google Gemini & Claude</li>
                  <li>GitHub</li>
                  <li>Vite</li>
                  <li>CMS</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                </ul>
              </div>
              <div className="skill">
                <i class="fa-solid fa-vial"></i>
                <h2>Testing</h2>
                <ul>
                  <li>Jest</li>
                  <li>React Testing Library</li>
                  <li>Unit Testing</li>
                </ul>
              </div>
            </div>

        </section>
        <section id="contact">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h1>Contact</h1>
            <p>Contact me for job opportunites, freelance work, or just to chat!</p>
            <form onSubmit={sendContact} className="glass">
              <input
                type="text"
                placeholder="Your name"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Your email"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                required
              />

              <input 
                type="text" 
                placeholder='Heading'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea 
                type="text" 
                placeholder='Enter your message'
                className='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <br />

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
                <i className="fa-solid fa-paper-plane"></i>
              </button>

              {error && <p className="error">{error}</p>}
              {success && <p className="success">Message sent!</p>}
            </form>
          </motion.div>  
        </section>
        <ContactLinks/>
      </div>
    </>
  )
}

export default App
