import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import FreelanceJobsList from './pages/FreelanceJobsList';
import Menu from './component/Menu';

const App: React.FC = () => {
    const [identity, setidentity] = useState<'visitor' | 'case_reviewer' | 'case_creator'>('visitor');

    const handleLogin = () => {
        // Logic to handle user login
        // For example, set identity based on the logged-in user
        //setidentity('case_reviewer'); // or 'case_creator' based on the user
        return
    };

    const handleLogout = () => {
        setidentity('visitor');
    };
    

    return (
        <div className="App">
            <Menu userType={identity} onLogin={handleLogin} onLogout={handleLogout} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FreelanceJobsList />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
