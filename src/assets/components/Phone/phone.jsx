import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from "../Container/container";
import WelcomeSection from "../Welcome/welcome";
import Progress from "../ProgressLines/progress";
import Description from '../PhoneDescription/description';
import Flag from 'react-world-flags';
import './phone.css';

const Phone = () => {
    const [currentPage] = useState(2);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("+964");
    const [flagCode, setFlagCode] = useState("IQ");

    const countryCodeToFlag = {
        "+1": "US", "+44": "GB", "+91": "IN", "+33": "FR", "+61": "AU",
        "+20": "EG", "+966": "SA", "+971": "AE", "+962": "JO", "+968": "OM",
        "+964": "IQ", "+965": "KW", "+974": "QA", "+973": "BH", "+249": "SD",
        "+970": "PS", "+218": "LY", "+49": "DE", "+31": "NL", "+81": "JP",
        "+86": "CN", "+34": "ES", "+39": "IT",
    };

    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleCountryCodeChange = (e) => {
        const code = e.target.value;
        setCountryCode(code);
        const countryFlag = countryCodeToFlag[code] || "IQ";
        setFlagCode(countryFlag);
    };

    return (
        <Container>
            <div className="account-selection-container">
                <WelcomeSection />

                <div className="selection-section">
                    <Progress currentPage={currentPage} />
                    <Description />

                    <label htmlFor="country-code-wrapper">Phone number </label><br />
                    <div className="phone-input-container">
                        <div className="country-code-wrapper" id='country-code-wrapper'>
                            <Flag code={flagCode} className="country-flag" />
                            <input
                                type="text"
                                value={countryCode}
                                onChange={handleCountryCodeChange}
                                maxLength={4}
                                className="country-code-input"
                                placeholder="+964"
                            />
                        </div>

                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            maxLength={10}
                            className="phone-number-input"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <Link
                        to={phoneNumber.length === 10 ? "/information" : "#"}
                        onClick={(e) => {
                            if (phoneNumber.length !== 10) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <button
                            className={`next-button ${phoneNumber.length === 10 ? 'active' : ''}`}
                            disabled={phoneNumber.length !== 10}
                        >
                            Send verification code
                        </button>
                    </Link>



                </div>
            </div>
        </Container>
    );
};

export default Phone;
