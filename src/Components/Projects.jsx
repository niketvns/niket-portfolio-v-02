import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";

const Projects = () => {
    return (
        <>
            <div className="main-projects">
                <div className="heading">
                    <h1>Projects</h1>
                </div>
                <div className="project-card-all">
                    {
                        ProjectData.map((val, ind) =>
                            <ProjectCard
                                id={ind}
                                title={val.Title}
                                img={val.Image}
                                link={val.Link}
                                github={val.Github}
                            />
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Projects;