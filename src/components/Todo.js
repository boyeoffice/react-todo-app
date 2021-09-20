import React from 'react';
import './Todo.css';

function Todo () {
    return (
        <div className="todo-container">
            <div className="header">TODO - ITEMS</div>
            <div className="tasks">
                <div className="task">
                    Grab some Pizza
                </div>
                <div className="task">
                    Do your workout
                </div>
            </div>
        </div>
    )
}


export default Todo;