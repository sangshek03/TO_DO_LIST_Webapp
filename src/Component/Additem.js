import React ,{useState} from "react";
import "./additem.css";

function Additem(props){
    const [title,settitle] = useState("");
    const [des,setdes] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !des){
            alert("fill title or des")
        }else
        props.addtodo(title,des);
    }

    return (
        <div className = "container">
            <form onSubmit={submit}>
                <div className="mb-3" >
                    <label htmlFor="title" className="form-label">Work-ToDo</label>
                    <input className="form-control" value = {title} onChange={(e) => settitle(e.target.value)}/>
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div htmlFor="des" className="mb-3">
                    <label className="form-label">Description</label>
                    <input className="form-control" value = {des} onChange={(e) => setdes(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
             </form>
             <hr/>        
        </div>
    );
}

export default Additem;