import React, { useRef } from 'react';
import '../css/Login.css';

const Login: React.FC<{ onLogin: (username: string, password: string) => void}> = ({ onLogin }) => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const username = usernameRef.current?.value || '';
        const password = passwordRef.current?.value || '';

        onLogin(username, password); // Call the onLogin prop
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input
                            className="form-input"
                            ref={usernameRef}
                            // onChange = {(e) => console.log("hi")}
                            required  
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                            className="form-input"
                            type="password"
                            ref={passwordRef}
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