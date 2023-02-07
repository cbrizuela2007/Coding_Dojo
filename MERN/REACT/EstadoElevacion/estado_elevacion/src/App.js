import logo from './logo.svg';
import './App.css';
import Prueba from './prueba_useRef';
import Wrapper from './Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper items={['something', 'sombrero', 'wholesome', 'ransom', 'apple', 'react', 'javascript']}/>
    </div>
  );
}

export default App;
