import axios from 'axios'
import React, { useState } from 'react'
import TaskList from './TaskList'
import EditTask from './EditTask'

const TaskItem=(props)=>{
    const {id,status,title,removeItem, editdata}=props
    const [toggle,setToggle]=useState(false)
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm("are you sure")
        if(confirmRemove){
            axios.delete(`http://localhost:3033/api/tasks/${id}`)
            .then((response)=>{
                const result=response.data
              //  console.log('delete data',result)
                removeItem(result.id)
            })
        }
    }

    const handleToggle=()=>{

        const result=!toggle
        setToggle(result)
    }

    return (
        <div>{toggle ? (
            <div>
                <EditTask id={id} status={status} title={title}  editdata={ editdata} handleToggle={handleToggle}/>
                <button onClick={handleToggle}>cancel</button>
            </div>
        ):(
            <div className="centertitle">
            <h4 className="titleset">{title}</h4>
            <button className="btn" onClick={handleToggle}>edit</button>
            <button className="btn" onClick={()=>{
                handleRemove(id)
            }}>remove</button>
            </div>
        )}
        </div>
    )
}

export default TaskItem