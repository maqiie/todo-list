import React, { useState } from 'react';

function Todoitems(){

    const [todo,seTodo]= useState({
        "title":"Learn react",
        "Description":"Introduction to react"

    })
    // console.log(todo);

    return(
        <div style={border}>
            <h1>{todo.title}</h1>
            <p>{todo.Description}</p>
        </div>
    )
}

export default Todoitems;