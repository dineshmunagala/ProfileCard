import React from 'react';
import ProfileCard from '../components/ProfileCard';
import Banner from '../components/Banner';

const ProfileList = ({ members = [], onDelete, onLike, onFollow }) => {
  return (

    
    <div className="profile-list-page">
        <Banner />
      {/* <h2>Profile List</h2> */}

      <div className="members-list">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            bio={m.bio}
            image={m.image}
            liked={m.liked}
            followed={m.followed}
            onDelete={() => onDelete(m.id)}
            onLike={() => onLike(m.id)}
            onFollow={() => onFollow(m.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
