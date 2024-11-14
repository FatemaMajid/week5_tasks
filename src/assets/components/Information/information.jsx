import React, { useState, useEffect } from 'react';
import Container from "../Container/container";
import WelcomeSection from "../Welcome/welcome";
import Progress from "../ProgressLines/progress";
import './information.css';
import { Link } from 'react-router-dom';

const Information = () => {
    const [currentPage, setCurrentPage] = useState(3); // Modify this to set state dynamically
    const [name, setName] = useState(""); // State for name
    const [email, setEmail] = useState(""); // State for email
    const [password, setPassword] = useState(""); // State for password

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    // Update currentPage when all inputs are filled
    useEffect(() => {
        if (name && email && password) {
            setCurrentPage(3.5);
        } else {
            setCurrentPage(3); // Reset to 3 if not all inputs are filled
        }
    }, [name, email, password]); // Run effect whenever one of the inputs changes

    return (
        <Container>
            <div className="account-selection-container">
                <WelcomeSection />

                <div className="selection-section">
                    <Progress currentPage={currentPage} />
                    <h1>Enter Your Information</h1>
                    <p>Please enter your personal information to complete the registration process.</p>
                    <div className="form">
                        {/* Name Input */}
                        <label htmlFor="name-input">Name</label>
                        <input
                            type="text"
                            id="name-input"
                            value={name}
                            onChange={handleNameChange}
                            className="text-input"
                            placeholder="Enter your name"
                        />

                        {/* Email Input */}
                        <label htmlFor="email-input">Email</label>
                        <input
                            type="email"
                            id="email-input"
                            value={email}
                            onChange={handleEmailChange}
                            className="text-input"
                            placeholder="Enter your email"
                        />

                        {/* Password Input */}
                        <label htmlFor="password-input">Password</label>
                        <input
                            type="password"
                            id="password-input"
                            value={password}
                            onChange={handlePasswordChange}
                            className="text-input"
                            placeholder="Enter your password"
                        />
                    </div>
                    {/* Next button */}
                    <Link
                     to={"/home"}
                     >
                    <button
                        className={`next-button ${(name && email && password) ? 'active' : ''}`}
                        disabled={!(name && email && password)}
                    >
                        Complete registration
                    </button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Information;
