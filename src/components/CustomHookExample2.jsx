import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

function CustomHookExample2() {
    const [task, setTask] = useLocalStorage('task', '')
    // storing an array in Local Storage
    const [tasks, setTasks] = useLocalStorage('tasks', [])

    const onSubmit = (e) => {
        e.preventDefault()

        const taskObj = {
            task,
            completed: false,
            date: new Date().toLocaleDateString()
        }

        setTasks([...tasks, taskObj])
    }

  return (
    <>
        <form onSubmit={onSubmit} className='w-50'>
            <div className="mb-3">
                <label className="form-label">Task</label> <br />
                <input 
                className='w-50'
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
        <hr />
        {tasks.map((task, index) => (
            <h3 key={task.index}>{task.task} - completed: {task.completed ? 'true' : 'false'} - {task.date}</h3>
        ))}
    </>
    )
}

export default CustomHookExample2