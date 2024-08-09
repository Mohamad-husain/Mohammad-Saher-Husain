import React from 'react'
import { IoCamera } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import '../UserProfile/ProfileCard3.css'

const ProfileCard3 = () => {
    return (
        <div>
            <div className="l-cardAccount3" >
                <main>
                    <section className="textAmeer">
                        <h2>Share your travel tips</h2>
                    </section> 
                    <section>
                        <div className="cameraAmeer">
                            <IoCamera /> <span className="subAmeer">Post Photos</span>
                        </div>
                    </section>
                    <section>
                        <div className="writeAmeer">
                            <FaEdit /> <span className="subAmeer">Write Reviw</span>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default ProfileCard3