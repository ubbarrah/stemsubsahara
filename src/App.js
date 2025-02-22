import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route index element = {<Home />} />
          </Routes>
        </Router>
        
      </header>
    </div>
  );

}

export default App;

