import logo from './logo.svg';
import './App.css';
import ListaTarea from './components/ListaTarea';
import { useState } from 'react';
import Form from './components/Form';



function App() {

  const [listatareas, setListaTarea] = useState([]);
  console.log(listatareas, "ësto es la lista de tareas")
 
  return (
    <div className="App">
      <Form listatareas={listatareas} setListaTarea={setListaTarea}/>
      <ListaTarea listatareas={listatareas} setListaTarea={setListaTarea}/>
    </div>
  );
}

export default App;
