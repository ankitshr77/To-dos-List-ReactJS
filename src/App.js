import { useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState("")
  const [todos, setTodos] = useState([])

  
  const addTask = () =>{
    setTodos([...todos, userInput])
  }


  return (
    <div className='Wrapper'>
     <h1><u>TO-DOS LIST</u></h1> 
     <input onChange={(event)=>setUserInput(event.target.value)} type="text" placeholder='Task you want to do' className='inputbox'></input>
     <button className='addbutton' onClick={()=>addTask()}>Add</button>
     <ol>
      {
        todos.map((todo)=><h3><li>{todo}</li></h3>)
      }
     </ol>
    </div>
  );
}

export default App;
