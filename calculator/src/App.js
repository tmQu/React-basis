import "./App.css";
import CustomCalculator from "./calculator/CustomCalculator";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SimpleCalculator from "./calculator/SimpleCalculator";
function App() { 

 

 
  return ( 

    <div className="App"> 
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">Simple calculator</Link>
          </li>
          <li>
            <Link to="/custom" className="link">Custom calculator</Link>
          </li>
        </ul>
      </nav>
    
      <Routes>
        <Route path="/" element={<SimpleCalculator />}/>
        <Route path="/custom" element={<CustomCalculator />}/>
      </Routes>
    </BrowserRouter>
 
    </div> 
  ); 
} 
 
export default App; 
