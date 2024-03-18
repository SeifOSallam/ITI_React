import './projectCard.css'

function ProjectCard(props){
    return(
        
            <div style={{width: "26%", height:"26%", 
            backgroundColor:props.index%2?"gray":"lightgray",
            color:props.index%2?"white":"black"}}
            className="card d-flex justify-content-center align-items-center">
                <h2>{props.name}</h2>
            </div>
            
            
    );
}

export default ProjectCard;