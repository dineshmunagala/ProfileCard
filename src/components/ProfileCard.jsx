import React from 'react'
import "../App.css";

const ProfileCard = ({
    name,
    bio,
    image,
    liked,
    followed,
    onDelete,
    onLike,
    onFollow,
}) => {
  return (
    <div className='profile-card'>
        <img src={image} alt={name} className='profile-img' />
        <h3>{name}</h3>
        <p>{bio}</p>

          <div className="btn-row">
          <button className="like-btn" onClick={onLike}>
            {liked ? "❤️ Liked" : "♡ Like"}
          </button>
       
        
          <button className="follow-btn" onClick={onFollow}>
            {followed ? "✅ Following" : "+ Follow"}
          </button>
        </div>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
    </div>
  )
}

export default ProfileCard
