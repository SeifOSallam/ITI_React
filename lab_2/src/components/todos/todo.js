import './todo.css'

function Todo(props) {
    return(
        <li id={props.id} className="d-flex justify-content-between">
            <div className="form-check"> 
                <span style={{textDecorationLine: props.checked?"line-through":"none"}}>
                    {props.content}
                </span>
                <i className="input-helper"></i> 
            </div>
            <div style={{marginRight:"0", width:"10%"}} className="d-flex justify-content-between">
                <i className="todoOption fa-solid fa-check fa-lg" 
                onClick={() => props.handleDone(props.id)}></i>
                <i className="todoOption fa-solid fa-trash fa-lg" onClick={() => props.handleDelete(props.id)}></i>
            </div>
        </li>
    );
}

export default Todo;