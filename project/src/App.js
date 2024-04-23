import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'; 

function App() {
  return (
    
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
