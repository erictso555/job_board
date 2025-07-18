import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate  } from 'react-router-dom';
import Login from './pages/Login';
import FreelanceJobsList from './pages/FreelanceJobsList';
import Menu from './component/Menu';
import  { users, User } from './seed/user';
import './index.css'

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleLogin = (username: string, password: string) => {
        const userFound = users.find(user => user.username === username && user.password === password);
        if (userFound) {
            setUser(userFound);
            localStorage.setItem('user', JSON.stringify(userFound)); // Save to localStorage
            navigate("/");
        } else {    
            alert('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Remove from localStorage
        navigate("/");
    };

    return (
        console.log('Current user:', user), 
        <div className="App">
            <Menu userType={user?.identity || null} onLogin={() => {}} onLogout={handleLogout} />
            <div className="main-container">
                <Routes>
                    <Route path="/" element={user ? <FreelanceJobsList currentUser={user} /> : <Login onLogin={handleLogin} />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route
                        path="/created-jobs"    
                        element={
                            user
                                ? <FreelanceJobsList currentUser={user} showOnlyCreated />
                                : <div>Please log in to view your created jobs.</div>
                        }
                    />
                <Route path="/accepted-jobs"/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
