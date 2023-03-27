import { Routes, Route } from 'react-router-dom';
import Maps from './components/Maps';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Landing/>} />
        <Route path='/maps' element = {<Maps/>} />
        
      </Routes>
      
    </div>
  );
}

export default App;
