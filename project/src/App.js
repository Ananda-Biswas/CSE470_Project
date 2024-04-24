import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Member from './pages/Member';
import Admin from './pages/Admin';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'; // Adjust the path as needed

function App() {
  return (
    
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/member" element={<Member/>} />
          <Route exact path="/admin" element={<Admin/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
