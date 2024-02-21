import React, { useState, useEffect, useRef } from 'react';
import Video from '../assets/video.mp4';
import '../Popup/Popup.css';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
                if (videoRef.current) {
                    videoRef.current.play();
                }
            }, 6000);
            if (videoRef.current) {
                videoRef.current.addEventListener('ended', () => {
                    setTimeout(() => setIsOpen(false), 600);
                });
            }
        }
    }, [isOpen]);

    const handleButtonClick = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
    };

    return (
        <div>
            <div className="Container">
                <button
                    className={isOpen ? 'video-button disabled' : 'video-button'}
                    onClick={handleButtonClick}
                >
                    Click Me
                </button>
                {isOpen && (
                    <div className="popup open">
                        {showMessage ? (
                            <p className="popup-message">Welcome, young grasshopper!</p>
                        ) : (
                            <video
                                ref={videoRef}
                                src={Video}
                                playsInline
                                className="popup-video"
                                onCanPlayThrough={() => {
                                    if (videoRef.current) {
                                        videoRef.current.play();
        }
    }}
/>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Popup;
