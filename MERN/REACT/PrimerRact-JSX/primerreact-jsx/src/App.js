import './App.css';
import Tarea from './components/Tarea';
import Tarea2 from './components/Tarea2.jsx';

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <Tarea2/>
      <Tarea/>
    </div>
  );
}

export default App;
