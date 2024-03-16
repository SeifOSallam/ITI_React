import './aboutme.css';


function AboutMe(){
    return(
        <div id="aboutme" 
        className="text-center d-flex flex-column p-4 align-items-center w-75 m-auto justify-content-between">
            <span>About Me</span>
            <a href="../../assets/files/Seif's Resume Updated.pdf" download="Seif Resume" 
            className="p-2 border-1 rounded bg-secondary text-white" style={{width: "100px"}}>Resume</a>
        </div>
    );
}

export default AboutMe;