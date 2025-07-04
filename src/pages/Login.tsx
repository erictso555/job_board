import React, { useState } from 'react';
import '../css/Login.css';

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add login logic here
        onLogin(); // Call the onLogin prop
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Username</label>
                        <input
                            className="form-input"
                            type="email"
                            id="email"
                            value={Username}
                            onChange={(e) => setUsername(e.target.value)}
                            required    
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                            className="form-input"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="login-button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;