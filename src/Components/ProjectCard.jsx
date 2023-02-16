const ProjectCard = (props) => {
    return (
        <>
            <div className="project-individual">
                <img src={props.img} alt="" />
                <div className="details">
                    <a href={props.link} target='_blank'>Live</a>
                    <a href={props.github} target='_blank'>See Code</a>
                </div>
                <div className="title-desc">
                    <p>{props.title}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;