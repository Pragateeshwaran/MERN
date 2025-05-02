// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   const handle_r = () => {
//     setCount(count + 1)
//   }

//   const handle_l = () => {
//     setCount(count - 1)
//   }

//   return (
//     <div>
//       <h1>Counter</h1>
//       <p>{count}</p>
//       <button onClick={handle_r}>
//         <img src="/Untitled.jpg" alt="image" />
//       </button>
//       <button onClick={handle_l}>
//         <img src="/Untitled.jpg" alt="image" />
//       </button>
//     </div>
//   )
// }

// export default App


import { useState } from "react";


function apps(){
  const [count, setCount] = useState(0)

  return(
    <>
    <div>
    <p>{count}</p>
  </div>
  <div>
    <button onClick={()=> {
      setCount(count-1)
    }}> next </button>
    <button onClick={()=> {
      setCount(count+1)
    }}> next </button>
  </div></>
  )
}

export default apps