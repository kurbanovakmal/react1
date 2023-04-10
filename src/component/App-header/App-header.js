import React from "react";
import './App-header.css';


const AppHeader = ({ todo, done }) => {
    return (
        <div className="App-header">
            <h1>Todo List</h1>
            <p className="text-muted">{todo} more to do, {done} done</p>
        </div>
        
)};


export default AppHeader