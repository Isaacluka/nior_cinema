import React from 'react'
import { Link, useParams } from 'react-router'

const PostScreening = () => {
    const { name } = useParams();
  return (
    <>
        <h3>Exclusive Access</h3>
        <h2>An Honor to Have You With Us</h2>
        <h3>Thank you for joining this private screening. Your perspective is invaluable to us.</h3>
        
        <div>
            <Link to="/">
                <div>Submit Feedback</div>
            </Link>
        </div>
    </>
  )
}

export default PostScreening