import React, { useRef, useEffect } from 'react';
import '../css/Login.css';

const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()!.split(';').shift() || null;
    return null;
}

const setCookie = (name: string, value: string, days = 365) => {
    const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

const Login: React.FC<{ onLogin: (username: string, password: string) => void}> = ({ onLogin }) => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [usernames, setUsernames] = React.useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = React.useState(false);
    const [filteredUsernames, setFilteredUsernames] = React.useState<string[]>([]);

    useEffect(() => {
        const cookie = getCookie('savedUsernames');
        if (cookie) {
            setUsernames(JSON.parse(cookie));
        }
    }, []);

    const handleUsernameFocus = () => {
        setFilteredUsernames(usernames);
        setShowSuggestions(true);
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFilteredUsernames(
            usernames.filter(u => u.toLowerCase().includes(value.toLowerCase()))
        );
        setShowSuggestions(true);
    };

    const handleSuggestionClick = (username: string) => {
        if (usernameRef.current) {
            usernameRef.current.value = username;
        }
        setShowSuggestions(false);
    };

    const handleBlur = () => {
        setTimeout(() => setShowSuggestions(false), 100);   
    };
        

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const username = usernameRef.current?.value || '';
        const password = passwordRef.current?.value || '';

        // Update cookie with new username if not already present
        let updatedUsernames = [...usernames];
        if (username && !updatedUsernames.includes(username)) {
            updatedUsernames.push(username);
            setCookie('savedUsernames', JSON.stringify(updatedUsernames));
            setUsernames(updatedUsernames);
        }

        onLogin(username, password);
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
                        onFocus={handleUsernameFocus}
                        onChange={handleUsernameChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                        required  
                    />
                    {showSuggestions && filteredUsernames.length > 0 && (
                        <ul style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            background: "#fff",
                            border: "1px solid #ccc",
                            zIndex: 10,
                            listStyle: "none",
                            margin: 0,
                            padding: 0
                        }}>
                            {filteredUsernames.map((username, idx) => (
                                <li
                                    key={idx}
                                    style={{ padding: "8px", cursor: "pointer" }}
                                    onMouseDown={() => handleSuggestionClick(username)}
                                >
                                    {username}
                                </li>
                            ))}
                        </ul>
                    )}
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