import { inherits } from "node:util";
import { useState } from "react";

function Navbar () {
    const [open, setOpen] = useState(false); //remembers if menu is open or closed*

    return (
        
        <nav>
            <button
                className="hamburger"
                onClick={() => setOpen(!open)}
            >
                <i class="fa-solid fa-bars" style={{color: "inherit"}}></i>
            </button>
            <ul className={open ? "nav-links open" : "nav-links"}>
                {/* clicking on any link will close the sidebar */}
                <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
                <li><a href="#bio" onClick={() => setOpen(false)}>Bio</a></li>
                <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
                <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
                <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
                <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;