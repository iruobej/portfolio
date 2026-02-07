export default function Project({projName, link, pic, desc}) {
    return(
        <a href={link} className="project" target="_blank">
            <img src={pic} alt={`${projName} screenshot`} />
            <div className="text-area">
                <h2>{projName}</h2>
                <p>{desc}</p>
            </div>
        </a>
    );
}