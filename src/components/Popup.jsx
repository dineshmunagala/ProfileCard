// import React from 'react'
// import "../App.css";

// const Popup = ({member,liked,followed,onClose,onLike,onFollow,onDelete}) => {
//   if (!member) return null;

//   return (
//     <div className='popup-overlay' onClick={onClose}>
//         <div className='popup-box' onClick={(e) => e.stopPropagation()}>
//            <button
//           className="popup-x-btn"
//           onClick={(e) => {
//             e.stopPropagation();
//             onClose();
//           }}
//           aria-label="Close"
//         >
//           ×
//         </button>
//             <h3>🎉 Member Added Successfully!</h3>
//             <img src={member.image} alt={member.name} />
//             <h4>{member.name}</h4>
//             <p>{member.bio}</p>

//             <div className="btn-row">
//           <button className="like-btn" 
//           onClick={(e) => {
//             e.stopPropagation();
//             onLike();
//           }}>
//             {liked ? "❤️ Liked" : "♡ Like"}
//           </button>
       
        
//           <button className="follow-btn"
//            onClick={(e) => {
//             e.stopPropagation();
//             onFollow();
//            }}>
//             {followed ? "✅ Following" : "+ Follow"}
//           </button>
//         </div >

        
//         <button className="delete-btn" onClick={() => onDelete()}>Delete</button>

//             {/* <button className="close-btn"  
//             onClick={(e) => {e.stopPropagation();
//             onClose();
//             } }>Close</button> */}
           
           
//         </div>
      
//     </div>
//   )
// }

// export default Popup
import React from 'react';
import "../App.css";

const Popup = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className='popup-overlay' onClick={onClose}>
      <div className='popup-box' onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          className="popup-x-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close"
        >
          ×
        </button>

        <h3>🎉 Member Added Successfully!</h3>

        <img src={member.image} alt={member.name} />
        <h4>{member.name}</h4>
        <p>{member.bio}</p>

      </div>
    </div>
  );
};

export default Popup;
