import ProjectCard from "../ProjectCard/projectCard";


function Projects(){
    const allProjects = [
        {
            name: "HTML5"
        },
        {
            name: "CSS3"
        },
        {
            name: "C++"
        },
        {
            name: "NodeJS"
        },
        {
            name: "React"
        },
        {
            name: "Web"
        },
    ]
    return(
        <div className="pageContent d-flex flex-column">
        <div className="portfolio">
            <h1 className="text-black">Portfolio</h1>
        </div>
        <div className="cards d-flex flex-wrap justify-content-around align-items-center flex-fill">
            {
                allProjects.map((project, index) => {
                    return(
                        <ProjectCard name={project.name} key={index} index={index}></ProjectCard>
                    )
                })
            }
        </div>
    </div>
    );
}

export default Projects;