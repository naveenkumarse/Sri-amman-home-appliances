import './App.css';

import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import NavBar from './components/navbar/Navbar.js';


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
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
