import './App.css';

import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Navbar />
            </div>
          } />
           <Route path="/login" element={
            <div>
              <Login />
            </div>
          } />
           <Route path="/register" element={
            <div>
              <Register />
            </div>
          } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
