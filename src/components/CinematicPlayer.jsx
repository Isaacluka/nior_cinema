import React from 'react'
import { useRef } from "react";
import { Link, useParams } from 'react-router'
import YouTube from "react-youtube";
import { useNavigate } from "react-router-dom";


const CinematicPlayer = () => {
    // const { name } = useParams();  
    const navigate = useNavigate();
    const containerRef = useRef(null);

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

  return (
    <>
      {/* <Link to="/postscreening">
          <div>CinematicPlayer</div>
      </Link> */}
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-full max-w-7xl aspect-video shadow-2xl">
          <YouTube 
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
          />


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