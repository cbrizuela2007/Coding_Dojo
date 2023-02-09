import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Navegar from './components/Navegar';
import ApiWalker from './components/ApiWalker';
function App() {

  return (
    <div className="App">

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<ApiWalker/>}/>   
            <Route path='/:id' element={<ApiWalker/>}/>       
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
