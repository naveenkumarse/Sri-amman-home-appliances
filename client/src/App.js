import './App.css';

import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';

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
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
