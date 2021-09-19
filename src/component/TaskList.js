import React from 'react'
import TaskItem from './TaskItem'

const TaskList = (props) => {
    const { data,removeItem, editdata } = props
     console.log('task',data)
    return (
        <div>
            <h2 className="tasklist">TaskList-{data.length}</h2>
            {data.map((ele) => {
                return <TaskItem
                    key={ele.id}
                    {...ele}
                    removeItem={removeItem}
                    editdata={ editdata}
                />
            })}
        </div>
    )
}

export default TaskList