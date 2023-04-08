import './App.css';

import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import NavBar from './components/navbar/Navbar.js';
import Login from './components/login/login.js';
import Register from './components/login/register.js';
import Description from './components/Description';



function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <NavBar />
            </div>
          } />
          <Route path="/login" element={
            <div>
              <NavBar />
              <Login />
            </div>
          } />
          <Route path="/register" element={
            <div>
              <NavBar />
              <Register />
            </div>
          } />
            <Route path="/description" element={
            <div>
              <NavBar />
              <Description/>
            </div>
          } />
        </Routes>
      
      
      </HashRouter>
    </div>
  );
}

export default App;
