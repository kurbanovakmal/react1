import React, { Component } from "react";

import './Todo-list-item.css'

const TodoListItem = ({ label, onDeleted, ToggleDone, ToggleImportant,done, important }) => {

        let classNames = " d-flex "
        let className2 = " p-2 flex-grow-1 "
        if (done) {
            className2+='done'
        }
        if (important) {
            classNames+='important'
        }


        return (
            <div className={classNames}>
                <span
                className={className2}
                onClick={ ToggleDone }
                >
                { label }
                </span>
                <div className="p-2">
                    <button type="button" className="btn btn-outline-info" onClick={ ToggleImportant }>
                        <i className="bi bi-exclamation-lg"></i>
                    </button>
                    <button type="button" className="btn btn-outline-info" onClick={ onDeleted }>
                        <i className="bi bi-trash3"></i>
                    </button>
                </div>
            </div>)
    }
    
    export default TodoListItem



