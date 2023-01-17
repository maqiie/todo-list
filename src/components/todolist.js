import { useState } from "react";
import Todoitems from "./todoItems";

function Todolist(){

    const[todos,seTodo] =useState([
        {
            "id":1,
            "title":"learn react",
            "description":"introductions to react"
        },
        {
            "id":2,
            "title":"go to the market",
            "description":"buy some groceries "
        }
    ])
    return(
            <div>
                {/*loop over todo list and get individual todo*/}
    {
        todos.map(item, index) => (
            <Todoitems key={index} item=(item) />
    }   
    ))

</div>
   
}

export default Todolist;