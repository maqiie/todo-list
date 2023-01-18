import React, { useState, createContext} from "react";


export const TodoContext =createContext()


 export const TodoProvider =(props) =>{

   
      const [todos, setTodos] = useState([
         {
            id:1,
            title: "go to the market",
            status: "false"
   
         },
         {
            id:2,
            title: "go to the gym",
            status: "false"
   
         }
      ]);
     

   
    return(

      <TodoContext.Provider  value ={[todos, setTodos]}>
        {props.children}
      </TodoContext.Provider>
    )
        
    
 }

 
 