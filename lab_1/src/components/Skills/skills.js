import SkillBar from '../SkillBar/skillbar';
import './skills.css';


function Skills(){
    const allSkills = [
        {
            skillName:"HTML5",
            percentage:"50%"
        },
        {
            skillName:"CSS3",
            percentage:"20%"
        },
        {
            skillName:"Javascript",
            percentage:"80%"
        },
    ]
    return(
        <div className="skills p-4 text-white text-center">
    <div className="container">
        <h1>Skills</h1>
        <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente ducimus eum esse dignissimos est. Fuga, quo qui consectetur itaque veniam obcaecati eaque asperiores a inventore nobis neque tempora consequuntur.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio at voluptatum in cum itaque earum voluptatibus error consequatur, odio ut qui tempore temporibus aliquid adipisci, odit suscipit consequuntur ex nulla.
        </span>
        <div className="w-75 m-auto mt-5 d-flex">
            <div className="leftfocus p-4 d-flex flex-column flex-fill">
                <h2 className="text-center">MY FOCUS</h2>
                <div className="w-75 border border-light m-auto"></div>
                <span className="text-start mt-4">UI/UX Design</span>
                <span className="text-start mt-2">Responsive Design</span>
                <span className="text-start mt-2">Web Design</span>
                <span className="text-start mt-2">Mobile App Design</span>
            </div>
            <div className="rightskills flex-fill">
                {
                    allSkills.map((skill, index) => {
                        return(
                            <SkillBar percentage={skill.percentage} 
                            skillName={skill.skillName} key={index}></SkillBar>
                        );
                    })
                }
            </div>
        </div>
    </div>
</div>
    );
}

export default Skills;