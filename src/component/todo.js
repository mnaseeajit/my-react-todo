
import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
//import img1 from "/home/manseeajit/my-react-todo/src/assets (1)/image.png";
import img1 from "../assets/image.png";


const ReduxTodo = () => {
    return (
       
            <div className="App">
               <header className="header">
                   <img src={img1} alt="img" />
               </header>
               <div className="container">
                     <TaskForm />
                     <TaskList />
               </div>
            </div>
        
    )
}

export default ReduxTodo;