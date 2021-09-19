import axios from 'axios'
import React from 'react'
import TaskForm from './TaskForm'

const AddTask=(props)=>{
const {addItem}=props

    const formData=(formInfo)=>{
        axios.post('http://localhost:3033/api/tasks',formInfo)
        .then((response)=>{
            const result=response.data
            //console.log('newdata',result)
            addItem(result)
        })
    }

    return (
        <div>
            <h2 className="addtask">Add Task</h2>
            <TaskForm formData={formData}/>
        </div>
    )
}
export default AddTask