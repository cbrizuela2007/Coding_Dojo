import './App.css';
import Tab from './components/tabs'
import { useState } from 'react'; 
import Informacion from './components/informacion';


function App() {

  const [tabs,setTab] = useState([
                      {label:"Tab 1", contenido:"Tab 1 content is showing here", estado:"activo"},
                      {label:"Tab 2", contenido:"prueba  de contenido del tab 2", estado:"inactivo"},
                      {label:"Tab 3", contenido:"prueba  de contenido del tab 3", estado:"inactivo"}
  ]);

  return (
    <div className="App">
      <Tab tabs={tabs} setTab={setTab}/>
      <Informacion tabs={tabs}/>
    </div>
  );
}

export default App;
