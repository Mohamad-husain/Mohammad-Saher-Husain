import React, { useState } from 'react';
import '../EditProfile/ProfileEdit.css';
import { IoCloudUploadOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";


const uploader = Uploader({
    apiKey: "free"
});

const options = { multi: true };

const ProfileEdit = () => {

    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
    const [uploadProfile, setUploadProfile] = useState(null);
    const [userName, setUserName] = useState("");
    const [bio, setBio] = useState("");
    const [country, setCountry] = useState("")
    const navigate = useNavigate();

    
    const handleUserName = (event) => {
        setUserName(event.target.value);
    }

    const handleBio = (event) => {
        setBio(event.target.value);
    }

    const handleCountry = (event) => {
        setCountry(event.target.value);
    }

    const handleSaveProfile = async () => {
        const token = localStorage.getItem('token');
        const profileData = {uploadedImageUrl, uploadProfile, userName, bio, country};
        
        try {
            const response = await fetch(`http://localhost:5000/updateProfile/${token}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profileData)
            });
    
            const data = await response.json();
            if (data.message === 'Profile updated successfully') {
                localStorage.setItem('profileData', JSON.stringify(profileData));
                navigate("/ProfileComponents");
            } else {
                alert('Error updating profile');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('An error occurred. Please try again later.');
        }
    };
    

    const handleCancel = () => {
        navigate("/ProfileComponents");
    };

    return (
        <div>
            <div>
                {uploadedImageUrl ? (
                    <img
                        src={uploadedImageUrl}
                        className="card-img-top big-profile-photo"
                        alt=""
                        style={{ width: "100%", maxHeight: "400px" }}
                    />
                ) : (
                    <UploadButton
                        uploader={uploader}
                        options={options}
                        onComplete={files => {
                            if (files.length > 0) {
                                const uploadedFile = files[0];
                                setUploadedImageUrl(uploadedFile.fileUrl);
                            }
                        }}
                    >
                        {({ onClick }) => (
                            <button className="EC" onClick={onClick}>
                                <span> Upload Photo <IoCloudUploadOutline /></span>
                            </button>
                        )}
                    </UploadButton>
                )}
            </div>

            <div className="d-sm-flex align-items-start text-center text-sm-start">
                <div className="profileAvatar avatar-xxl mt-n5 mb-3" style={{ width: "210px", height: "190px", marginTop: "-60px", marginLeft: "60px" }} >
                    {uploadProfile ? (
                        <img
                            src={uploadProfile}
                            className="rounded-circle mb-5 "
                            style={{ width: "100%", height: "100%" }}
                            alt="profile"
                        />
                    ) : (
                        <UploadButton
                            uploader={uploader}
                            options={options}
                            onComplete={files => {
                                if (files.length > 0) {
                                    const uploadedFile = files[0];
                                    setUploadProfile(uploadedFile.fileUrl);
                                }
                            }}
                        >
                            {({ onClick }) => (
                                <button className="rounded-circle mb-5 " style={{ width: "100%", height: "100%", border: "none" }} onClick={onClick}>
                                </button>
                            )}
                        </UploadButton>
                    )}
                </div>
            </div>

            <div className="form-group field">
                <input 
                    type="text" 
                    className="form-field-2 " 
                    placeholder="edit your name..." 
                    name="name" id="name" required
                    onChange={handleUserName}
                    value={userName}
                />
            </div>

            <div className="form-group field">
                <input
                    type="text"
                    className="form-field-2 "
                    placeholder="edit your bio..."
                    name="name" id="name" required
                    onChange={handleBio}
                    value={bio}
                />
            </div>

            <div className="form-group field">
                <input 
                    type="text" 
                    className="form-field-2 " 
                    placeholder="enter your country..." 
                    name="name" id="name" required
                    onChange={handleCountry}
                    value={country}
                />
            </div>

            <div className="butEdit">
                <div className="flex-grid-center" style={{ marginRight: "600px" }}>
                    <button className="pure-button fuller-button blue" onClick={handleSaveProfile}>save</button>
                    <button className="pure-button fuller-button red" onClick={handleCancel}>cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit;