import './App.css';
import Tabs from './components/Tabs'
import { useState } from 'react'; 
import Informacion from './components/informacion';


function App() {

  const [tabs,setTab] = useState([
                      {label:"Tab 1", contenido:"Tab 1 content is showing here", estado:"inactivo"},
                      {label:"Tab 2", contenido:"prueba  de contenido del tab 2", estado:"activo"},
                      {label:"Tab 3", contenido:"prueba  de contenido del tab 3", estado:"inactivo"}
  ]);

  return (
    <div className="App">
        <Tabs tabs={tabs} setTab={setTab}/>
       <Informacion tabs={tabs}/> 
    </div>
  );
}

export default App;
