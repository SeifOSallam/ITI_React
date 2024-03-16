import ProjectCard from "../ProjectCard/projectCard";


function Projects(){
    return(
        <div className="pageContent d-flex flex-column">
        <div className="portfolio">
            <h1 className="text-black">Portfolio</h1>
        </div>
        <div className="cards d-flex flex-wrap justify-content-around align-items-center flex-fill">
            <ProjectCard name="HTML5"></ProjectCard>
            <ProjectCard name="CSS3"></ProjectCard>
            <ProjectCard name="C++"></ProjectCard>
            <ProjectCard name="NodeJS"></ProjectCard>
            <ProjectCard name="React"></ProjectCard>
            <ProjectCard name="Web"></ProjectCard>
        </div>
    </div>
    );
}

export default Projects;