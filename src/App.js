import { Routes, Route } from 'react-router-dom';
import Maps from './components/Maps';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Landing/>} />
        <Route path='/maps' element = {<Maps/>} />
        
      </Routes>
      
    </div>
  );
}

export default App;
