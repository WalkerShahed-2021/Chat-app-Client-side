import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Messenger from "./Pages/Messenger/Messenger";

function App() {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Home></Home>}/>
         <Route path="/messenger" element={<Messenger></Messenger>}/>
      </Routes>
    </div>
   
  );
}

export default App;
