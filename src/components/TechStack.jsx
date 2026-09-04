import { div } from "framer-motion/client"
import { techStack } from "../data/techstack"
import TechItem from "./TechItem"
export default function TechStack() {
    return (
        <div className="tech-stack">
            {
                techStack.map(tech => {
                    const {name, src} = tech
                    return (
                        <TechItem key={name} name={name} src={src}/>
                    )
                })
            }
        </div>
    )
}