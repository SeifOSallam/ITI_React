import './projectCard.css'

function ProjectCard(props){
    return(
        
            <div style={{width: "26%", height:"26%"}}
            className="card bg-secondary d-flex justify-content-center align-items-center text-white">
                <h2>{props.name}</h2>
            </div>
            
            
    );
}

export default ProjectCard;