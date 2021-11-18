import './App.css';
import React, {useState} from "react";
import  {add, clearCompleted, markAllCompleted, remove, toggleCompleted} from "./features/toDoSlice";
import { useDispatch, useSelector } from 'react-redux'



const Todos = () => {
    const todos = useSelector((state)=>state)
    const [title, setTitle] = useState("")
    
    const dispatch = useDispatch()
    
    
    const onSave = (e) => {
      e.preventDefault()
      dispatch(add(title))
      setTitle("")
    }

    const onDelete = (id) => {
        dispatch(remove(id))
    }

    const handleToggle = (id) => {
        dispatch(toggleCompleted(id))
    }

    const handleCompleted = () => {
        dispatch(clearCompleted())
    }

    const handleMark = () => {
        dispatch(markAllCompleted())
    }

    return (
        <div className="container">
            <input name="title" value={title} onChange={(e) => setTitle(e.currentTarget.value)}></input>
            <button  className="saveBtn" onClick={onSave}>Kaydet</button>
            <ul>
                {todos.map((task) => {
                    return (
                        <li key={task.id}>
                            <div className="taskWrapper">
                                <button className="deleteBtn" onClick={() => onDelete(task.id)}>X</button>
                                <span className={task.completed ? "toggled" : null } onClick={() => handleToggle(task.id)}>{task.title}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <button  className="clearBtn" onClick={handleCompleted}>Clear completed tasks</button>
            <button  className="markBtn" onClick={handleMark}>Mark all completed</button>
        </div>
    )
}

export default Todos;
