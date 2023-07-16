import React from "react";
import './TodoDate.css'

const TodoDate = (props) => {
    const { date } = props;
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-Us', { day: 'numeric' });
    const year = date.getFullYear();

    return (
        <>
            <div className="todo-date ">
                <div className="todo-date__month">{month}</div>
                <div className="todo-date__day" >{day}</div>
                <div className="todo-date__year">{year}</div>
            </div>
        </>
    )
}
export default TodoDate;