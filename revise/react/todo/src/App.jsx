import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, settask] = useState("")
  const [tasks, settasks] = useState([])
  const [id, setid] = useState(1)
  
  const addTask = () => {
    if(task !== '') {
      const new_task = {ids: id, text: task, completed: false}
      const news_tasks = [...tasks, new_task]
      setid(id+1)
      settasks(news_tasks)
      settask('')
    }
  }
  const toggle = (id) =>{
    const new_task = tasks.map((Task)=>{
      return Task.ids == id ? {...Task, completed: !Task.completed} : Task 
    })
    settasks(new_task)
  }
  const remove = (id) => { 
    const new_tasks = tasks.filter((task) => {
      return task.ids !== id   
    })
    settasks(new_tasks)
  }
  
  return (
    <>
      Task:
      <input
       type='text'
       value={task}
       onChange={(e) => {settask(e.target.value)}}>
      </input>
      <button onClick={addTask}>add</button>
     
      <ul>
      {tasks.map((Task) => {
         return(
          <li key={Task.ids}>
            {Task.text}
            <span>
              <button onClick={() => remove(Task.ids)}> Delete </button>
            </span>
            <span>
              <input
                type="checkbox"
                checked= {Task.completed}
                onChange={()=>toggle(Task.ids)}
              ></input>
            </span>
          </li>
         )
      })}
      </ul>
    </>
  )
}

export default App