import React from 'react';
import GetVideo from './Get.mp4'; // Adjust the path accordingly
import './video.css'; 

function Videopart() {
    return (
        <div className="video-container">
            <video className="fullscreen-video" autoPlay loop muted>
                <source src={GetVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Videopart;
