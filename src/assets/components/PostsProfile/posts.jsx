import './posts.css';
import { useState } from 'react';
import Project from "../CreateProject/project";


const ActionOption = ({ label }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className="actionoption" onClick={handleClick}>
            <svg
                className={`icon ${isClicked ? 'clicked' : ''}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.22172 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <p>{label}</p>
        </div>
    );
};


const Post = ({ clientName, postedTime, title, description, image, duration, pricing }) => (
    <div className="postsharing">
        <div className="sender">
            <div className="info">
                <div className="imgsender"></div>
                <div className="textuser">
                    <h1>{clientName}</h1>
                    <p>{postedTime}</p>
                </div>
            </div>
            <div className="otheroptionPost">
                <button className='Available'>Available</button>
                <button className='Dotes'>
                    <img src="./dotes.png" alt="options" />
                </button>
            </div>
        </div>
        <div className="postDetails">
            <div className="title">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            {image && <img src={image} alt="post visual" />}
            {duration && (
                <div className="title">
                    <h1>Duration of project</h1>
                    <p>{duration}</p>
                </div>
            )}
            {pricing && (
                <div className="title">
                    <h1>Pricing</h1>
                    <p>{pricing}</p>
                </div>
            )}
            <div className="action">

                <ActionOption icon="./03_favourite.svg" label="like" />
                <img src="./02_message-02.png" alt="comment"   ></img><p>comment</p>
            </div>
        </div>
    </div>
);

const Posts = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const openForm = () => setIsFormVisible(true);
    const closeForm = () => setIsFormVisible(false);
    return (
        <div className="post">
            <div className="createproject">
                <img src="./user.png" alt="user" />
                <input type="text" className="projectInput" placeholder='Mustafa, let’s create a project!' />
                <div className="insertimg" onClick={openForm}>
                    <img src="./button.png" alt="insert" />
                </div>

            </div>
            {/* Modal to create project */}
            <Project FlageForm={isFormVisible} onClose={closeForm} />

            <Post
                clientName="Client Name"
                postedTime="Posted 2 hours ago"
                title="Looking for Full-Stack Developer with 2+ years experience"
                description="To build a responsive, user-focused web application. Must be skilled in both front-end and back-end development... See more"
                image="./image 2.png"
            />

            <Post
                clientName="Client Name"
                postedTime="Posted 2 hours ago"
                title="Looking for Full-Stack Developer with 2+ years experience"
                description="To build a responsive, user-focused web application. Must be skilled in both front-end and back-end development"
                duration="4 Months"
                pricing="Hourly $50"
            />
        </div>
    );
}


export default Posts;
