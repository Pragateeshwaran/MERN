// import { useState } from 'react';

// function App() {
//   // 1. Declare React states
//   const [searchTerm, setSearchTerm] = useState('');
  
//   // Sample list of items to filter
//   const fruits = ['Apple', 'Banana', 'Pineapple', 'Orange', 'Mango'];

//   // 3. Filter items based on search term (case-insensitive)
//   const filteredFruits = fruits.filter((fruit) =>
//     fruit.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>🍎 Fruit Search Filter</h1>

//       {/* 2. Input box to enter search term */}
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ padding: '8px', width: '200px' }}
//       />

//       {/* 4. Display filtered list */}
//       <ul>
//         {filteredFruits.map((fruit, index) => (
//           <li >{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";

function list(){
  const [searchTerm, setSearchTerm] = useState('');
  const fruits = ['apple', 'banana', 'orange', 'cat'];
  const targetnames = fruits.filter((fruit) =>
      (fruit.toLowerCase().includes(searchTerm))
  )
  return (
    <>
      <input
          type='text'
          placeholder="type"
          value = {searchTerm}
          onChange={(e)=>{
            setSearchTerm(e.target.value)
          }}
        />  
        <ul>
          {
            targetnames.map((fruit)=>
                  (<li> {fruit} </li>)
            )
          }
        </ul>
    </>
  )
}

export default list