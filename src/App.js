import './App.css';
import Navbar from './Compnents/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Publications from './Compnents/Publications';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' exact element={Home} />
            <Route path='/Publications' element={<Publications />} />
          </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  <div>
    <h1>HOME</h1>
  </div>
}

export default App;
