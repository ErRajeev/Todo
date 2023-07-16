import React from "react";
import TodoItem from "../todo_item/TodoItem.jsx";
import './TodoList.css'

const TodoList = (props) => {
    const { data = [] } = props;
    //  console.log(props);
    return (
        <>
            <div className="todo_list_main">
                <h1 className="n">Todo List</h1>
                <div className="todo_list">{
                    data.map((e) => (
                        <TodoItem
                            key={e.id}
                            task={e.task}
                            date={e.date}
                        />
                    ))}
                </div>
            </div>
        </>
    )
};
export default TodoList;