import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';

// Dynamically import components
const Container = React.lazy(() => import("../Container/container"));
const WelcomeSection = React.lazy(() => import("../Welcome/welcome"));
const Progress = React.lazy(() => import("../ProgressLines/progress"));
const Description = React.lazy(() => import('../PhoneDescription/description'));
const OtpInput = React.lazy(() => import('react-otp-input'));

import './otp.css';

const Otp = () => {
    const [currentPage] = useState(2.5);
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(59);
    const [timerFinished, setTimerFinished] = useState(false);

    useEffect(() => {
        if (timer === 0) {
            setTimerFinished(true);
            return;
        }

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    const handleResend = () => {
        setTimer(59);
        setTimerFinished(false);
        setOtp('');
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
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
                                renderInput={(props) => <input {...props} className="otp-input" />}
                            />
                        </div>

                        <div className="timer-container">
                            <div className="timer">
                                <img src="./clock-01.png" alt="" />
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
        </Suspense>
    );
};

export default Otp;
