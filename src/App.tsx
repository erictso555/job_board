import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, useNavigate  } from 'react-router-dom';
import Login from './pages/Login';
import FreelanceJobsList from './pages/FreelanceJobsList';
import Menu from './component/Menu';
import  { users } from './seed/user';

const App: React.FC = () => {
    const [identity, setidentity] = useState<'visitor' | 'case_reviewer' | 'case_creator'>('visitor');

    const navigate = useNavigate();

    const handleLogin = (username: string, password: string) => {
        const userFound = users.find(user => user.username === username && user.password === password);
        
        if (userFound) {
            setidentity(userFound.identity);
            navigate("/") 
        } else {    
            alert('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setidentity('visitor');
    };

    return (
        <div className="App">
            <Menu userType={identity} onLogin={() => {}} onLogout={handleLogout} />
            
            <Routes>
                <Route path="/" element={<FreelanceJobsList />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
            </Routes>
            
        </div>
    );
};

export default App;
