import logo from './logo.svg';
import './App.css';
import PersonaCard from './components/PersonaCard';

function App() {
  return (
    <div className="App">
      <PersonaCard nombre="Jane" apellido="Doe" edad={45} color_cabello="negro"/>
      <PersonaCard nombre="John" apellido="Smith" edad={88} color_cabello="marrón"/>
    </div>
  );
}

export default App;
