import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    console.log('Logging in with', username, password);
    // Here you would usually send the username and password to the server
    // For this demo, we'll just log it to the console
    alert(`Login attempted for username: ${username}`);
  };

  return (
      <div className="App">
        <header className="App-header">
          <h2>Login Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </header>
      </div>
  );
}

export default App;
