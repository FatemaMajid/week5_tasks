import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from "../Container/container";
import WelcomeSection from "../Welcome/welcome";
import Progress from "../ProgressLines/progress"; // Import Progress component
import './selectAccount.css';

const SelectAccount = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentPage] = useState(1); // Assuming this is the first page
  const location = useLocation(); // Access the current location

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <Container>
      <div className="account-selection-container">
        <WelcomeSection />

        <div className="selection-section">
          {/* Progress component with currentPage */}
          <Progress currentPage={currentPage} />
          <h1>Let’s Get started!</h1>
          <p>How do you plan to use this platform</p>

          <div className="options">
            <div
              className={`option-card ${selectedOption === 'freelancer' ? 'selected' : ''}`}
              onClick={() => handleSelectOption('freelancer')}
            >
              <div className="icon"><img src="./03_user.png" alt="" /></div>
              <h3>Freelancer</h3>
              <p>I'm a freelancer ready to work for projects</p>
            </div>

            <div
              className={`option-card ${selectedOption === 'client' ? 'selected' : ''}`}
              onClick={() => handleSelectOption('client')}
            >
              <div className="icon"><img src="./07_user-search-01.png" alt="" /></div>
              <h3>Client</h3>
              <p>I'm a client searching for talented freelancers</p>
            </div>
          </div>

          <Link
            to={selectedOption ? "/phone" : "#"} 
            onClick={(e) => {
              if (!selectedOption) {
                e.preventDefault();
              }
            }}
          >
            <button
              className={`next-button ${selectedOption ? 'active' : ''}`}
              disabled={!selectedOption}
            >
              Next {' >'}
            </button>
          </Link>

        </div>
      </div>
    </Container>
  );
};

export default SelectAccount;
