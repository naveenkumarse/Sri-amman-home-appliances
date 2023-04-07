import './App.css';

import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import NavBar from './components/navbar/navbar';
import Login from './components/login/login';
import Register from './components/login/register';


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
