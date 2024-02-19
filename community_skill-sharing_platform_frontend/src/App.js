import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';


function App() {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} exact />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </Router>
    );


}
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    console.log('Logging in with', username, password);
    // Here you would usually send the username and password to the server
    // For this demo, we'll just log it to the console
    alert(`Login attempted for username: ${username}`);
  };
  // Your useState hooks and handleSubmit function

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

