
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import NewReport from './components/newReport/NewReport';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/reports/new" element={<NewReport />} />

        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
