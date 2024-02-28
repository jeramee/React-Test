// App.js
import React from 'react';
import UuidDisplay from './UuidDisplay';
import Task from './Task';

function App() {
  const bobTaskUUID = '123e4567-e89b-12d3-a456-426614174001'; // Replace with your actual UUID
  const bobSubTasks = [
    { id: 1, description: 'Bob1' },
    { id: 2, description: 'Bob2' },
    { id: 3, description: 'Bob3' },
    { id: 4, description: 'Bob4' },
    { id: 5, description: 'Bob5' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* Display the UUID using UuidDisplay component */}
        <UuidDisplay uuid={bobTaskUUID} />
        
        {/* Render the Task component with correct properties */}
        <Task title="Bob" description="About Bob" subTasks={bobSubTasks} />
        
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
