import React from 'react';
import '../css/menu.css'

interface MenuProps {
    userType: null | 'case_reviewer' | 'case_creator';
    onLogin: () => void;
    onLogout: () => void;
}

const Menu: React.FC<MenuProps> = ({ userType, onLogin, onLogout }) => {
    return (    
        <div className="navbar">
            <h1 className="site-title">
                <a href='/'>Freelance Job</a>
            </h1>
            <ul className="nav-list">
                {userType === null && (
                    <li>
                        <a href='/login' onClick={onLogin}>Login</a>
                    </li>   
                )}
                {userType === 'case_reviewer' && (
                    <>
                        <li>
                            <a href='/accepted-jobs'>Accepted Jobs</a>
                        </li>
                        <li>
                            <a onClick={onLogout}>Logout</a>
                        </li>
                    </>
                )}
                {userType === 'case_creator' && (
                    <>
                        <li>
                            <a href='/created-jobs'>Created Jobs</a>
                        </li>
                        <li>
                            <a onClick={onLogout}>Logout</a>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Menu;    