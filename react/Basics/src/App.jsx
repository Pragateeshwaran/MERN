// // App.jsx
// export default function App() {
//   const name = "Pragateeshwaran";
//   return (
//     <div>
//       <h1>Hello, {name} 👋</h1>
//     </div>
//   );
// }



// function Greeting() {
//   return <h2>I'm a Functional Component 🌱</h2>;
// }

// export default function App() {
//   return (
//     <div>
//       <Greeting />
//     </div>
//   );
// }


// import React, { Component } from 'react';

// class Welcome extends Component {
//   render() {
//     return <h2>I am a Class Component 🧓</h2>;
//   }
// }

// export default function App() {
//   return (
//     <div>
//       <Welcome />
//     </div>
//   );
// }

// function Hello(props) {
//   return <h2>Hello, {props.name} 🧠</h2>;
// }

// export default function App() {
//   return (
//     <div>
//       <Hello name="Keerthan" />
//       <Hello name="React Master" />
//     </div>
//   );
// }


// function ClickMe() {
//   function handleClick() {
//     alert("You clicked me! 🖱️");
//   }

//   return <button onClick={handleClick}>Click Me!</button>;
// }

// export default function App() {
//   return (
//     <div>
//       <ClickMe />
//     </div>
//   );
// }

import { useState } from 'react';

function Counter() {
  var [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count} 🧮</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
