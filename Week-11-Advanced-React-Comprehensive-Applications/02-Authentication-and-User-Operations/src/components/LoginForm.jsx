import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function LoginForm() {
  const { initAuth } = useContext(AuthContext);
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    initAuth(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>USERNAME</h2>
            <input
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={form.username}
            ></input>
          </div>
          <div>
            <h2>PASSWORD</h2>
            <input
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleChange}
              value={form.password}
            ></input>
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
