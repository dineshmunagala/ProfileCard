import React, { useState } from 'react';
import Banner from '../components/Banner';
import Memberform from '../components/Memberform';
// import MemberList from '../components/MemberList';
import Popup from '../components/Popup';

const Home = ({ members, addMember, deleteMember, toggleLike, toggleFollow }) => {
  const [popupMember, setPopupMember] = useState(null);

  return (
    <div>
      <Banner />
     <Memberform
         onAdd={async (m) => {
         const savedMember = await addMember(m);
         setPopupMember(savedMember);  
          setTimeout(() => {
            setPopupMember(null);
          }, 10000);          
      }}
      />
      {/* <MemberList
        members={members}
        onDelete={deleteMember}
        onLike={toggleLike}
        onFollow={toggleFollow}
      /> */}

      {popupMember && (
        <Popup
          member={popupMember}
          onClose={() => setPopupMember(null)}
          // onDelete={() => deleteMember(popupMember.id)}
          // onLike={() => toggleLike(popupMember.id)}
          // onFollow={() => toggleFollow(popupMember.id)}
        />
      )}
    </div>
  );
};

export default Home;
