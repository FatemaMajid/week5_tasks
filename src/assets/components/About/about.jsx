import React, { useState } from 'react';
import './about.css';

const About = () => {
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isEditingAbout, setIsEditingAbout] = useState(false);
    const [aboutText, setAboutText] = useState(
        "GreenTech Solutions Inc. Renewable Energy & Technology San Francisco, California, with operations in North America and Europe"
    );
    const [profileInfo, setProfileInfo] = useState({
        name: "Mustafa Emad",
        rating: "5.0"
    });

    const toggleProfileEdit = () => setIsEditingProfile(!isEditingProfile);
    const toggleAboutEdit = () => setIsEditingAbout(!isEditingAbout);

    return (
        <div className="AboutScreen">
            <div className="userInfo">
                <div className="photo">
                    <img src="./user.png" alt="Profile" />
                </div>
                {isEditingProfile ? (
                    <input
                        type="text"
                        value={profileInfo.name}
                        onChange={(e) => setProfileInfo({ ...profileInfo, name: e.target.value })}
                    />
                ) : (
                    <h1>{profileInfo.name}</h1>
                )}

                <div className="rate">
                    {!isEditingProfile && <img src="./Star 1.png" alt="Star" />}
                    {isEditingProfile ? (
                        <input
                            type="text"
                            value={profileInfo.rating}
                            onChange={(e) => setProfileInfo({ ...profileInfo, rating: e.target.value })}
                        />
                    ) : (
                        <p>{profileInfo.rating}</p>
                    )}
                </div>

                <button onClick={toggleProfileEdit}>
                    {isEditingProfile ? "Save" : "Edit Profile"}
                </button>
            </div>

            <div className="aboutuser">
                <div className="titleabout">
                    <h1>About</h1>
                    <button onClick={toggleAboutEdit}>
                        {isEditingAbout ? "Save" : <img src="./edit.png" alt="Edit" />}
                    </button>
                </div>
                <div className="description">
                    {isEditingAbout ? (
                        <textarea
                            rows={5}
                            cols={35}
                            value={aboutText}
                            onChange={(e) => setAboutText(e.target.value)}
                        />
                    ) : (
                        <p>{aboutText}</p>
                    )}
                </div>
            </div>

            <div className="projectHistory">
                <div className="titleabout">
                    <h1>Projects History</h1>
                    <div className="imges">
                        <img src="./add.png" alt="Add Project" />
                        <img src="./edit.png" alt="Edit Projects" />
                    </div>
                </div>

                {/* Example of one project entry */}
                {[1, 2].map((_, index) => (
                    <div key={index} className="project">
                        {/* <div className="slide">
                            <img src={Sideline} alt="Sideline" />
                        </div> */}
                        <div className="text">
                            <h1>Project Name</h1>
                            <h4>22 Jan 2024 - 11 May 2024</h4>
                            <p>Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
