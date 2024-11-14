import './project.css';
import { useEffect } from 'react';

const Project = ({ FlageForm, onClose }) => {
    useEffect(() => {
        console.log(`Form visibility changed: ${FlageForm}`);
    }, [FlageForm]);

    return (
        <div className="createProject" style={{ display: FlageForm ? 'block' : 'none' }}>
            <div className="insertForm">
                <div className="title">
                    <h1>Create a Project</h1>
                    <button onClick={onClose}>
                        <img src="./closebtn.png" alt="Hide Form" />
                    </button>
                </div>
                <div className="formheader">
                    <div className="tow"></div>
                    <div className="one"></div>
                </div>
                <div className="selection">
                    <p>Select Required Qualifications</p>
                    <select name="qualification" id="qualification">
                        <option className='placeholderOfselecter' disabled selected hidden>
                            Please select an option
                        </option>
                        <option value="uiux">UI/UX Designer</option>
                        <option value="backend">Back-end</option>
                        <option value="frontend">Front-end</option>
                        <option value="mobile">Mobile App</option>
                    </select>
                </div>
                <div className="description">
                    <p className='des-p'>Description</p>
                    <input 
                        type="text" 
                        placeholder="Enter Description for the project" 
                        className="descriptiontext" 
                        id="description" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Project;
