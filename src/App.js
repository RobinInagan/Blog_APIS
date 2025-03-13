import services from './services/services.js'
import { useState,useEffect } from 'react';
const getServices = new services()

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hola Mundo
        </p>
      </header>
    </div>
  );
}

export default App;
