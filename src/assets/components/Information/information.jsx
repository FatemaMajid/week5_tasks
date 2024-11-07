import React, { useState } from 'react';
import Container from "../Container/container";
import WelcomeSection from "../Welcome/welcome";
import Progress from "../ProgressLines/progress";
import Description from '../PhoneDescription/description';
import './information.css';

const Information = () => {
    const [currentPage] = useState(2); // Assuming this is the second page
    const [name, setName] = useState(""); // State for name
    const [email, setEmail] = useState(""); // State for email
    const [password, setPassword] = useState(""); // State for password

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <Container>
            <div className="account-selection-container">
                <WelcomeSection />

                <div className="selection-section">
                    <Progress currentPage={currentPage} />
                    <Description />

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

                    {/* Next button */}
                    <button
                        className={`next-button ${(name && email && password) ? 'active' : ''}`}
                        disabled={!(name && email && password)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Information;
