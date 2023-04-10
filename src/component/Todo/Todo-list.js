import React from "react";

import TodoListItem from "../Todo-list-item/Todo-list-item";
import './Todo-list.css'





const TodoList = ( {todos, onDeleted, ToggleDone, ToggleImportant} ) => {
    const elements = todos.map((item) => {
        const {id, ...itemProp} = item

        return (
            <li key={id} className="list-group-item">
               
                    <TodoListItem
                        {...itemProp} 
                        onDeleted={() => onDeleted(id)}
                        ToggleDone={()=> ToggleDone(id)}
                        ToggleImportant={() => ToggleImportant(id)}
                    />
                
            </li>
        )
    })
    return (
        <ul className="list-group">
            { elements }
        </ul>);
    };

export default TodoList;