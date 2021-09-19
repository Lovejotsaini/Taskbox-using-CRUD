import React, { useState, useEffect } from 'react'
import AddTask from './AddTask'
import axios from 'axios'
import TaskList from './TaskList'

const TaskContainer = (props) => {
    const [data, setData] = useState([])
    // console.log(data)

    const addItem = (task) => {
        //   console.log('newda',task)
        setData([...data, task])
    }

    const removeItem = (id) => {
        const result = data.filter((task) => {
            return task.id !== id
        })
        setData(result)
    }

    useEffect(() => {
        axios.get('http://localhost:3033/api/tasks')
            .then((response) => {
                const result = response.data
                setData(result)
            }).catch((err) => {
                alert(err.message)
            })
    }, [])

    const editdata=(task)=>{
      //  console.log('endgame',task)
        const res=data.map((ele)=>{
            if(ele.id===task.id){
                return {...ele,...task}
            }else{
                return {...ele}
            }
        })
        setData(res)
      //  console.log('endgame',result)
    }

    return (
        <div>
            <h1 className="taskcontainer">Task Container</h1>
            <AddTask addItem={addItem} />
            <TaskList data={data} removeItem={removeItem}  editdata={ editdata}/>
        </div>
    )
}

export default TaskContainer