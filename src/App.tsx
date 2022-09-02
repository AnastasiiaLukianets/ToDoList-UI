import React from 'react';
import './App.css';

let name: string;
name = 'Anastasiia';

function App() {

  console.log("Hola");

  return (
    <div className="App">
      Hola, {name}
    </div>
  );
}

export default App;
