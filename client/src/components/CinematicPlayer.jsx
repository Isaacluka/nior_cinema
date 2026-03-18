import React from 'react'
import { useRef } from "react";
import { Link, useParams } from 'react-router'
import YouTube from "react-youtube";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


const CinematicPlayer = () => {
    // const { name } = useParams();  
    const navigate = useNavigate();
    const containerRef = useRef();

    const handleReady = (event) => {
    // Auto play
      event.target.playVideo();
    };

    const handleStateChange = (event) => {
      // When video starts playing
      if (event.data === 1) {
        if (containerRef.current.requestFullscreen) {
          containerRef.current.requestFullscreen();
        }
      }
      if (event.data === 0) {
        navigate("/postScreening");
      }
    };

    
    const handleEnd = () =>{
      navigate("/postScreening");
    };

    useEffect(() => {
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = function () {
        window.history.go(1);
    };
}, []);

  return (
    <>
      {/* <Link to="/postscreening">
          <div>CinematicPlayer</div>
      </Link> */}
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-full max-w-7xl aspect-video shadow-2xl">

          <video controls 
            className="w-full rounded-lg" 
            onLoadedMetadata={handleReady}
            onPlay={handleStateChange}
            onPause={handleStateChange}
            onEnded ={handleEnd}>
            <source src="https://res.cloudinary.com/dbcxedtzc/video/upload/v1773748550/Noir_Cinema_wx24qu.mp4" type="video/mp4" />
          </video>
          {/* <YouTube 
            className="w-full h-full rounded-lg"
            videoId = "Q8q3EVcaFqY"
            onReady={handleReady}
            onStateChange={handleStateChange}
            onEnd = {handleEnd}
            opts = {{
              width:"100%",
              height: "100%",
              playerVars: {
                modestbranding: 1,
                rel:0,
              },
            }}
          /> */}


          {/* <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/Q8q3EVcaFqY?modestbranding=1&rel=0"
            title="NOIR Cinema Film"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        </div>
      </div>
    </>    
  )
}



export default CinematicPlayer