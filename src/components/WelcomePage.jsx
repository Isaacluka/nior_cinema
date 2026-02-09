import React from 'react'
import { Link } from 'react-router'
import { useParams } from 'react-router'

const WelcomePage = () => {
    const { name } = useParams();
  return (
    <div>
        <p>Member Exclusive</p>
        <p>Premiere Screening</p>
        <h1>
            OMOBIREN
        </h1>
        <p>2H 14M</p>
        <p>Psychological Triller</p>
        <div>
            <Link to="/cinema">
                Watch Film
            </Link>
        </div>
        <div className="footer">
            <p>Exclusive for verified invitations</p>
            <p>2026 Studio Premiere</p>
        </div>
    </div>
  )
}

export default WelcomePage