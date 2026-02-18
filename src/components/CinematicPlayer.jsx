import React from 'react'
import { Link, useParams } from 'react-router'

const CinematicPlayer = () => {
    const { name } = useParams();  

  return (
    <>
      {/* <Link to="/postscreening">
          <div>CinematicPlayer</div>
      </Link> */}
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-full max-w-7xl aspect-video shadow-2xl">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/Q8q3EVcaFqY?modestbranding=1&rel=0"
            title="NOIR Cinema Film"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>    
  )
}



export default CinematicPlayer