import './skillbar.css'

function SkillBar(props){
    return(
        <form className="container-fluid d-inline">
            <span className="input-group-text text-center bg-secondary text-white" id="basic-addon1" style={{width: "20%"}}>{props.skillName}</span>
            <div className="progress" style={{width:"80%"}}>
                <div className="progress-bar bg-primary" style={{width: props.percentage}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </form>
    );
}

export default SkillBar;