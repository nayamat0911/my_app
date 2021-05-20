import React from "react";
import './App.css';
import About from "./components/About";
import My_index from './Even_handler/My_index'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
       <My_index/>
        <About/>
      </header>
    </div>
  );
}

export default App;
