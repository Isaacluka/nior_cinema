import React from 'react'
import { Link, useParams } from 'react-router'

const CinematicPlayer = () => {
    const { name } = useParams();  

  return (
    <Link to="/postscreening">
        <div>CinematicPlayer</div>
    </Link>
    
  )
}

export default CinematicPlayer