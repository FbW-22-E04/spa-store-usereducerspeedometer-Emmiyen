import "./App.css";
import Car from "./components/Car";
import CarContextProvider from "./Context";
import { useState } from "react";

function App() {

  return (
    <div className="App">
      
     <CarContextProvider>
      <Car />
     </CarContextProvider>
    </div>
  );
}

export default App;
