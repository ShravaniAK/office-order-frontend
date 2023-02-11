import React, { useState } from 'react';

const apiLink = 'https://oom.onrender.com/auth/register';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visibility, setVisibility] = useState([]);
  const [message, setMessage] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(apiLink, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, visibility }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="visibility">Visibility:</label>
        <input
          type="text"
          id="visibility"
          value={visibility.join(',')}
          onChange={(event) => setVisibility(event.target.value.split(','))}
        />
      </div>
      <button type="submit">Submit</button>
      {message && <div>{message}</div>}
    </form>
  );
}

export default Register;
