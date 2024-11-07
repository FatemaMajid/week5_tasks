import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from "../Container/container";
import WelcomeSection from "../Welcome/welcome";
import Progress from "../ProgressLines/progress";
import Description from '../PhoneDescription/description';
import OtpInput from 'react-otp-input';
import './otp.css';

const Otp = () => {
    const [currentPage, setCurrentPage] = useState(2);
    const [otp, setOtp] = useState(''); // State to store OTP
    const [timer, setTimer] = useState(59); // State for the countdown timer
    const [timerFinished, setTimerFinished] = useState(false); // State to track if timer has finished

    useEffect(() => {
        if (timer === 0) {
            setTimerFinished(true); // Set timerFinished to true when timer reaches 0
            return;
        }

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [timer]);

    const minutes = Math.floor(timer / 60); // Calculate minutes
    const seconds = timer % 60; // Calculate seconds

    // Resend OTP handler
    const handleResend = () => {
        setTimer(59); // Reset the timer to 59 seconds
        setTimerFinished(false); // Reset timerFinished to false
        setOtp(''); // Optionally reset the OTP input
    };

    return (
        <Container>
            <div className="account-selection-container">
                <WelcomeSection />
                <div className="selection-section">
                    <Progress currentPage={currentPage} />
                    <Description />
                    
                    <div className="otp-input-section">
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderInput={(props) => <input {...props} />}  
                            inputStyle={{
                                width: '56px',
                                height: '56px',
                                border: '1px solid #EBEBEB',
                                borderRadius: '8px',
                                padding: '10px',
                                textAlign: 'center',
                                margin: '0 5px',
                                opacity: 1,  
                                transition: 'opacity 0.3s', 
                            }}
                        />
                    </div>

                    {/* Timer Display */}
                    <div className="timer-container">
                        <div className="timer">
                            {`${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`}
                            <p>Didn't receive a message? 
                                <span
                                    style={{ color: timerFinished ? '#3C97AF' : '' }}
                                    onClick={handleResend}
                                >
                                    Resend
                                </span>
                            </p>
                        </div>
                    </div>

                    <Link
                        to={otp.length === 6 ? "/information" : "#"}
                        onClick={(e) => {
                            if (otp.length !== 6) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <button
                            className={`next-button ${otp.length === 6 ? 'active' : ''}`}
                            disabled={otp.length !== 6}
                        >
                            Verify OTP
                        </button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Otp;
