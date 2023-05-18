
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
