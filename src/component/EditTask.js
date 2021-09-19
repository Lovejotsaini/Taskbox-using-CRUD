import axios from 'axios'
import React from 'react'
import TaskForm from './TaskForm'

const EditTask = (props) => {
    const { id, status, title, editdata ,handleToggle} = props

    const formData = (task) => {
        // console.log('nva',task)
        axios.put(`http://localhost:3033/api/tasks/${id}`, task)
            .then((response) => {
                const result = response.data
                //console.log('res', result)
                editdata(result)
                handleToggle()
            })
    }

    return (
        <div>
            <h3>EditTask</h3>
            <TaskForm id={id} status={status} title={title} formData={formData} />
        </div>
    )
}

export default EditTask