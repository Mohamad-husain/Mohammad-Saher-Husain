import React, { useState, useEffect } from 'react';
import { TbLogout } from "react-icons/tb";
import { FaUserEdit } from "react-icons/fa";
import '../UserProfile/ProfileCover.css';
import { useNavigate } from "react-router-dom";
import SecondNavbar from './SecondNavbar';
import axios from 'axios';
import Navbar from "../Navbar/Navbar";

const ProfileCover = () => {
    const navigate = useNavigate();

    const [uploadedImageUrl, setUploadedImageUrl] = useState(localStorage.getItem('uploadedImageUrl') || "");
    const [uploadProfile, setUploadProfile] = useState(localStorage.getItem('uploadProfile') || "");
    const [userName, setUserName] = useState(localStorage.getItem('username') || "");
    const [isActive, setIsActive] = useState(false);
   



    async function find() {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:5000/getUserData/${token}`);
            setUploadedImageUrl(response.data.user.uploadedImageUrl);
            setUploadProfile(response.data.user.uploadProfile);
            setUserName(response.data.user.username);
        
        } catch (error) {
           
        }
    }
    find();
    useEffect(() => {

        const savedProfile = JSON.parse(localStorage.getItem('profileData'));
        if (savedProfile) {
            setUploadedImageUrl(savedProfile.uploadedImageUrl);
            setUploadProfile(savedProfile.uploadProfile);
            setUserName(savedProfile.userName);
        }
    }, []);

    const handleshowprofile = () => {
        navigate("/EditProfile");
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('profileData');
        navigate("/Login");
    };

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    }

    return (
        <div>
          <Navbar/>
            <div>
                <div>
                    <div>
                        <div className="profileBackgroundsaleh background-image" >
                            {uploadedImageUrl && isValidUrl(uploadedImageUrl) ? (
                                <img className="card-img-top big-profile-photo" 
                                    style={{ width: "100%", maxHeight: "400px" }}
                                    src={uploadedImageUrl} alt='profile' />
                            ) : (
                                <img className="card-img-top big-profile-photo"  
                                    style={{ width: "100%", maxHeight: "400px" }}
                                    src={"https://mrahkat.net/wp-content/uploads/2019/05/2182.png"} alt='' />
                            )}
                        </div>
                        
                        <div className="d-flex mt-1 justify-content-end" style={{ marginRight: "80px", position: "relative" }}>
                            <div className={`menuAmeer ${isActive ? 'open' : ''}`} style={{ position: "absolute", right: 0, zIndex: 999 }} onClick={toggleActive}>
                                <div className="menuAmeer-button" onClick={handleLogout}>
                                    <TbLogout size={24} color="red" />
                                </div>
                                <div>
                                    <button className="menuAmeer-button" onClick={handleshowprofile}>
                                        <FaUserEdit size={24} color="blue" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="d-sm-flex align-items-start text-center text-sm-start">
                            <div className="profileAvatar avatar-xxl mt-n5 mb-3" style={{ width: "210px", height: "190px", marginTop: "-60px", marginLeft: "60px" }} >

                                {uploadProfile && isValidUrl(uploadProfile) ? (
                                    <img className="rounded-circle mb-5 " style={{ width: "100%", height: "100%" }}
                                        src={uploadProfile} alt='profile' />
                                ) : (
                                    <img className="rounded-circle mb-5 " style={{ width: "100%", height: "100%" }} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAMFBMVEXk5ueutLfX2tynrrLn6eqrsbXq7O3h4+SyuLva3d6/w8bLz9HU19nR1NbIzM66v8KaEzi7AAAFHUlEQVR4nO2d23LjIAxAjREXYwP//7cLTrpNUzs1IEdyhvOwM7vbB5+RAHHtMHQ6nU6n0+l0Op1Op9PpdDqdTqfT6XQ6nU4JoDUMZhoTk1n/clHSt5vFRftNdN5oTf1dFYA2wYrf2HA5H9DBSrXhIoSSYoYLpRsMQcpNkxtSBkP9jUcxs3qlsuqoYC4QHTDebufXk4717HVgcuqIS2o7yk28bcDHYyqrjvWc+zUI4rhLshGBb2zAFZjcdNzAVAcKUuy/TeRpU+PC1qbKJdswHEBdnUsacQL1p/8i1Lqk2MzUH/8TWKpVcg+9sGo25lAJs4udqAUeqW4w99hEPqEB3+aSOgFGhU2jSo4Nl9Do8Nf05YCMYxIaaHdJNjyGTh0RXISILEJjMAKT4DBV043d8n8cvQyYrdWxCpSlD42ecVwSM3mrAZzmL3LvTN2hwYSUZQk7EucZ4GVZmgoQ5xlg9WWCQZ5NlZPlTZlIOxOABa/JJGgnaZhNJjcaWpmGqf+GDO3ShkFs/+Q9AGb7X5fQCPMMJrTxf4W0PIMRtTMTgrIGQO6ZhSKVaV6WeZJZ6FzQZeQnySj/QTLyk2Ro20zL4v+mTB9nmMqQLtB8UjmDXTWTFprNu0xPMrRTAOTJGe1OLfK02dNOm1G7M+pVQPNBS024i4DURzXAI6410zaZofk4wwPkWZY3zpBc0ihDHRjMwpk8y5IN1jZgpDYZEPcBA/kuYAJwXCy1xwrMKCc0mJwKhqLDzHtQW9yBpT00kkFXdqPuEPAjynJo/SswNQeG040N35Zoktf52abiWTnqz/8BTC31puWUZEPjTg31MZNfNExsKFfL96it0Xg1/i/mqmbD0wVqOmjS7aXXjAdvAn67UG7I/AEYWxIcKchn/a+AwR23kbzGyg30cnBCoNTCprjcBYw7pOOYDfvbgB7j6+JGKRvHq7zaALA4uxuepOKWS70IAFNwdqOjzkEJ05VUMgBm9CFaKdXqlP6U0kY3j+ZqKivJx0yLD8FlQpiXabqmyZ307eaL4coi62stT1xQJ3/2YCY/pwyLD8/OuJxqZv3fa5BayhKikCtP3Zm6/6t188TysvkX+dtSMJz97bA11qQfyj3bYPhJ5WY+zlmkZA6QfjqGlHecfFJi5YioIpHvzEs5tzBJOtBDDknprOynj4jB05cFqWxpNHnwWQbKTk6/LChLfVLVNhsqHT34iKZy8xE2TBQ6WgdEjQfi26MD4Nsbyg7yvUfokopAutC8hZLubas2qVwpWlCq0RHhLXMFGEbUo4x7OtafP46CCWgnf17bKDeeG5y8UnFyhj3o2FOf2oPhTWH50onnbUMB7nW5IzZ2Pqnl6OWtYblzzmtuULeX1Io6Zff2fS3/yUZij6BgIpGLyDfRUGMDeMdKq2wwTwm1HVlAAPE6OrkLog0DlwSOzfuHym0w2g3gXl6qx2L0aajXfVpAuJDWeCwOkebXQ2Fk49J8boB4sHymbfAEqoJsB9VQdGIcWEZFNby1h3TKH5H6REN7IA+Tyh6t/ej1CdS+t6l5lDHPVA2dMFJ/9iZ1oWEamKprtujvFmBRc2kQ82osKqripWoms5gtiudp4Kk/eZfyJxC4TMm2KO0CsB8uQ6X0QQfs13FQKc4zmoXlgxROoDk3mVQ7FzUazOdxT6Dsvh2MnAMjVNFvFmM3xXyibJ0G5e71edgSGcNm5W+HIhkneVNUa66/AZMxZaMm8KbIpdPpdDqdTucq/AMef1AMtjuGRwAAAABJRU5ErkJggg=="} alt=''/>
                                )}

                            </div>
                            <div className="ms-sm-4 mt-sm-3" style={{ width: "200px" }}>
                                <h1 className="ProfileName mb-0 h4">
                                    {userName} <i className="bi bi-patch-check-fill text-success small" />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SecondNavbar />
        </div>
    );
};
export default ProfileCover;