import { useState } from 'react'

function Todo(){
    let [todo,setTodo] = useState([])
    let [task, setTask] = useState('')
    function Add(){
            if(task !== ''){
                setTodo([...todo, task])
                setTask('')
            }else {
                window.prompt('enter the task')
            }
    }
    return (
        <>
            <h1>ToDo Scheduler</h1>
            <input type="text"
             value={task}
             onChange={e => setTask(e.target.value)}  
             placeholder="input task" />

            <button onClick={Add}>Add Task</button>

            <ul>
                {todo.map((todo,index)=>(
                    <li key={index}>{todo}</li>
                ))}
            </ul>

        </>
    )
}

export default Todo