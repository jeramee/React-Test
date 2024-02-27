// App.js
import React from 'react';
import UuidDisplay from './UuidDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Removed default content */}
        <p>
          {/* Added your custom content */}
          <code>Your React App with Generated UUID:</code>
        </p>
        <UuidDisplay />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
