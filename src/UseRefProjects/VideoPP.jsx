import React, { useRef } from "react";

const VideoPP = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div>
      <div className="button-container">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
      <video width="400" height="200" ref={videoRef} >
        <source src="/Videos/video1.mp4" />
      </video>
    </div>
  );
};

export default VideoPP;
