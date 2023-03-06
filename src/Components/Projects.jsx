import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";
import ProjectDataTab2 from "./ProjectDataTab2";

const Projects = () => {
    const [tab, setTab] = useState(1);

    const tab1Style = {
        color: tab === 1 ? '#7bef7b' : 'white'
    }

    const tab2Style = {
        color: tab === 2 ? '#7bef7b' : 'white'
    }

    return (
        <>
            <div className="main-projects">
                <div className="heading">
                    <h1>Projects</h1>
                </div>
                <div className="tabs">
                    <h3 style={tab1Style} onClick={() => setTab(1)}>Tab1</h3>
                    <h3 style={tab2Style} onClick={() => setTab(2)}>Tab2</h3>
                </div>

                {
                    tab === 1 ?
                        <div className="project-card-all tab1-cards">
                            {
                                ProjectData.map((val, ind) =>
                                    <ProjectCard
                                        key={val.id}
                                        id={ind}
                                        title={val.Title}
                                        img={val.Image}
                                        link={val.Link}
                                        github={val.Github}
                                    />
                                )
                            }
                        </div> :
                        <div className="project-card-all tab2-cards">
                            {
                                ProjectDataTab2.map((val, ind) =>
                                    <ProjectCard
                                        key={val.id}
                                        id={ind}
                                        title={val.Title}
                                        img={val.Image}
                                        link={val.Link}
                                        github={val.Github}
                                    />
                                )
                            }
                        </div>
                }
            </div>
        </>
    );
}

export default Projects;