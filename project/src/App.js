import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin_dashboard from './pages/Admin_dashboard';
import Member_dashboard from './pages/Member_dashboard';
import Player_dashboard from './pages/Player_dashboard';
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
          <Route exact path="/admin_dashboard" element={<Admin_dashboard/>} />
          <Route exact path="/member_dashboard" element={<Member_dashboard/>} />
          <Route exact path="/player_dashboard" element={<Player_dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
