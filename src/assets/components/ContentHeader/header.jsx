// Header.jsx
import React, { useState } from 'react';
import './header.css';
import Notifications from '../Notifications/notifications'; 

const Header = () => {
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);

    const toggleNotification = () => {
        setIsNotificationVisible(prevState => !prevState); 
    };

    return (
        <div className="headerContainer">
            <div className="headerContent">
                <div className="headerLogo">
                    <img src="./Logo.png" alt="Logo" />
                </div>
                <div className="headerOptions">
                    <a href="#" className="headerOption active">Home</a>
                    <a href="#">Dashboard</a>
                    <a href="#">Settings</a>
                </div>
                <div className="headerExtras">
                    <div className="headerSearch">
                        <img src="./search-01.png" alt="Search Icon" />
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="headerNotification">
                        <button onClick={toggleNotification} aria-label="Toggle Notification">
                            <img 
                                src="./10notification-02.png" 
                                alt="Notification Icon" 
                                className={isNotificationVisible ? 'hidden' : ''} 
                            />
                            <img 
                                src="./Ellipse 22.png" 
                                alt="Active Notification Icon" 
                                className={isNotificationVisible ? '' : 'hidden'} 
                            />
                        </button>
                    </div>
                </div>
            </div>
            <Notifications isVisible={isNotificationVisible} />
        </div>
    );
};

export default Header;
