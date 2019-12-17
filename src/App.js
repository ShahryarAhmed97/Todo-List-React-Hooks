import React from 'react';
import TodoList from "./components/TodoList"
// add linter while using hooks


function App() {



  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;





































// function App() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div className="App">
//       <button onClick={()=> setCount(count+1)}>
//         Click
//       </button>

//     </div>
//   );
// }