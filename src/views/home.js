import { useState } from "react";
import Todolist from "../components/todolist"

function home(){
const [todo, seTodo] = useState([
 {
        id: 1,
        "title":
        "description":"",
        "status":"",
},
{
    id: 1,
    "title":
    "description":"learning react",
    "status": false
},
{
    id: 1,
    "title":
    "description":"",
    "status":"",
}

])

// new todo state
const [newTodo, setNewTodo]=useState("")
// function add new todo
const handleSubmit =()=>{}
e.preventDefault()

const newTask ={
    id: Math.random() +1,
    "title":
    "description":"",
    "status":"",
}
seTodo([...todo,newTask])


}

//handle input change
const handleChange = (e)=>{
    setNewTodo(e.target.value)
    console.log(newTodo)

}
// e allows us to get the content bieng inputed



    return(
        <div>
        <form onsubmit={handleSubmit}>
            <input type="text" placeholder="Enter new todo" onChange={handleChange} name={newTodo} value={newTodo}/>
            <button type="submit"  onsubmit={handleSubmit} onclick="">submit</button>
        </form>
            
            <Todolist todo={todo}/>
        </div>
    )
}



function footer(){
    return(
<div>
        <footer/>
    
    </div>
    )
}
export default home;