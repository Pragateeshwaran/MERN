  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'

  function App() {
    const [element, setElement] = useState('')
    const List_elements = ["apple", "mango", "orange"]
    const [lists, setList] = useState(List_elements)
    const update = (e)=>{
      const value = e.target.value
      setElement(value)
      setList(
        List_elements.filter((list_ele) => {
          return list_ele.toLowerCase().includes(value.toLowerCase())
        })
      )
    }
    return (
      <>
        <input 
          type='text'
          value={element}
          onChange={(e)=>{update(e)}}
          
        />

    
        <ul>
        {
          lists.map((ele)=>{
            return <li>{ele}</li>
          })
        }
        </ul>
        </>

    
    )
  }

  export default App
