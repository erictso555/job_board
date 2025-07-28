import React, { useEffect } from 'react';
import { Route, Routes, useNavigate  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { setUser } from './store/userSlice';
import Login from './pages/Login';
import FreelanceJobsList from './pages/FreelanceJobsList';
import Menu from './component/Menu';
import { users } from './seed/user';
import './index.css';

const App: React.FC = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            dispatch(setUser(JSON.parse(savedUser)));
        }
    }, [dispatch]);

    const handleLogin = (username: string, password: string) => {
        const userFound = users.find(user => user.username === username && user.password === password);
        if (userFound) {
            dispatch(setUser(userFound));
            localStorage.setItem('user', JSON.stringify(userFound));
            navigate("/");
        } else {    
            alert('Invalid username or password');
        }
    };

    const handleLogout = () => {
        dispatch(setUser(null));
        localStorage.removeItem('user');
        navigate("/");
    };

    return (
        <div className="App">
            <Menu userType={user?.identity || null} onLogin={() => {}} onLogout={handleLogout} />
            <div className="main-container">
                <Routes>
                    <Route path="/" element={<FreelanceJobsList/>} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route
                        path="/created-jobs"    
                        element={
                            user
                                ? <FreelanceJobsList showOnlyCreated />
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