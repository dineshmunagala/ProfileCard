import React from 'react'
import ProfileCard from './ProfileCard'



const MemberList = ({members,onDelete,onLike,onFollow}) => {

  
  return (
    <div className='members-list'>
        {members.length === 0 ? (
            <p className='empty'>No Team members added yet</p>
        )  : (
            members.map ((member,index) => 
            <ProfileCard 
            key ={member.id}
            {...member}
            onDelete = {() => onDelete(index)}
            onLike = {() => onLike(member.id)}
            onFollow = {() => onFollow(member.id)}
            />
            
            )
        )
    }
      
    </div>
  )
}

export default MemberList
