import { projects } from "../data/projects"
import Project from "./Project"
export default function ProjectList() {
    return (
        <ul className="project-container">
            {projects.map(project => {
                const {projName, link, pic, desc} = project
                return (
                    <li>
                        <Project 
                            projName={projName}
                            link={link}
                            pic={pic}
                            desc={desc}
                        />
                    </li>
                )
            })}
        </ul>
    )
}