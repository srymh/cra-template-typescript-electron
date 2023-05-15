import React from 'react';
import logo from './logo.svg';
import './App.css';

const ipcRenderer = window.ipcRenderer;

function App() {
  const handleClick = () => {
    ipcRenderer
      .invoke('APP_hello', 'ping')
      .then((message) => {
        alert(`Received "${message}" from the main process`);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <button
          className="Button"
          onClick={handleClick}>
          Send "ping" to a main process
        </button>
      </header>
    </div>
  );
}

export default App;
