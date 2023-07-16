import "./App.css";
import Navbar from "./Component/Navbar";
import TodoContainer from "./Component/TodoContainer";
import React, {useState} from 'react'
import Additem from "./Component/Additem";


function App() {

  const onDelete = (sitem) =>{
     console.log("deleting",sitem);

     setItem(item.filter((e) => {
        return e !== sitem;
     }));
  }

  const addtodo = (title,des) => {
    console.log("adding");

    const mytodo = {
      id:Math.random(),
      task:title,
      des:des};

    setItem([...item,mytodo]);
    console.log(mytodo);
  }


  const [item,setItem] = useState([
    {
      id:1,
      task: "Morning Walk",
      des: "6am"
    },
    {
      id:2,
      task: "Study",
      des: "9am"
    },
    {
      id:3,
      task: "sleep",
      des: "10pm"
    }
  ]);
  
  return (
    <div className="App">
      <Navbar title = "To-Do WebApp"></Navbar>
      <Additem addtodo = {addtodo}></Additem>
      <TodoContainer item = {item} onDelete = {onDelete}></TodoContainer>
      
    </div>
  );
}

export default App;
