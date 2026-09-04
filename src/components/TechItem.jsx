export default function TechItem({name, src}) {
    return (
        <div className="tech-item">
            <img src={src} alt={`${name} Logo`}/>
            <span className="tech-label">{name}</span>
        </div>
    )
}