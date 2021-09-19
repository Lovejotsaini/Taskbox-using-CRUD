import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props) => {
    const { formData, id: sNo, status: taskStatus, title: taskTitle } = props
    const [title, setTitle] = useState(taskTitle ? taskTitle : '')
    const [status, setStatus] = useState(taskStatus ? taskStatus : false)
    const [id, setId] = (sNo ? sNo : uuidv4())

    const handleTextChange = (e) => {
        setTitle(e.target.value)
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formInfo = {
            id: uuidv4(),
            title: title,
            status: status
        }
        formData(formInfo)

        setTitle('')
        setStatus(false)
    }
    return (
        <div>
            <h2 className="taskform">TaskForm</h2>
            <form onSubmit={handleSubmit} className="formset">
                <label className="title">title</label><br />
                <input className="form" type="text" value={title} onChange={handleTextChange} /><br />
                <input className="form" type="checkbox" checked={status} onChange={handleStatusChange} /><br />

                <input className="btn" type="submit" />
            </form>
        </div>
    )
}

export default TaskForm