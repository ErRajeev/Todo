import React, { useState } from "react";
import './TodoItem.css'
import TodoDate from "../todo_date/TodoDate";

const TodoItem = (props) => {
    const { task = '', date = new Date() } = props;
    const [tasks, setTasks] = useState(task)
    console.log(props);
    return (
        <>
            <div className="todo_item_main">
                <div className="todo_item">
                    <TodoDate date={date} />
                    <div className="todo_task">
                        <h4 id="task">{tasks}</h4>
                    </div>
                    <div className="todo_btn">
                        <button onClick={() => {
                            setTasks('clicked')
                        }}>click</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TodoItem;