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
import Cart from './components/Cart';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes';
import { UserContext } from './components/protectedRoutes/UserContext';
import { useState } from 'react';



function App() {
  const [user, setuser] = useState('');
  return (
    <div className="App">
      <HashRouter>
        <UserContext.Provider value={{ user, setuser }}>
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
                  <ProtectedRoutes >
                  <NavBar />
                  <Description />
                  </ProtectedRoutes>
                </div>
              } />

              <Route path="/cart" element={
                <div>
                   <ProtectedRoutes >
                  <NavBar />
                  <Cart />
                  </ProtectedRoutes>
                </div>
              } />
           

          </Routes>
        </UserContext.Provider>

      </HashRouter>
    </div>
  );
}

export default App;
