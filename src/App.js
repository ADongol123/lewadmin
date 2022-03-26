import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Airvent from './pages/Airvent';
import Ductfans from './pages/Ductfans';
import Ductlines from './pages/Ductlines';
import ExauseFans from './pages/ExauseFans';
import Metalworks from './pages/Metalworks';
import Prefabhous from './pages/Prefabhous';
import Message from './pages/Message';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/airvent' element={<Airvent/>}/>
          <Route path='/ductfans' element={<Ductfans/>}/>
          <Route path='/ductlines' element={<Ductlines/>}/>
          <Route path='/exaustfans' element={<ExauseFans/>}/>
          <Route path='/metalworks' element={<Metalworks/>}/>
          <Route path='/prefabhouse' element={<Prefabhous/>}/>
          <Route path='/message' element={<Message/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
