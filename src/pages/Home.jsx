import React, { useState,useEffect } from 'react'
import Banner from '../components/Banner'
import Memberform from '../components/Memberform'
import MemberList from '../components/MemberList';
import Popup from '../components/Popup';
import "../App.css";
import axios from 'axios';



const API_URL = "http://localhost:8083/api/members";


const Home = () => {

    const [members, setMembers] = useState([]);
    const [popupMember, setPopupmember] = useState(null);




    useEffect(() => {
      axios.get(API_URL)
      .then(res => setMembers(res.data))
    .catch(err => console.log(err));
    }, []);
    

    // const addMember = (member) => {
    //   const newMember ={...member, liked:false, followed:false};
    //     setMembers([...members,newMember]);
    //     setPopupmember(newMember);

    // }

    // const deleteMember =(index) =>{
    //     const memberToDelete =members[index];
    //     setMembers(members.filter((_,i) => i !== index));

    //     if (popupMember?.id === memberToDelete.id){
    //       setPopupmember(null);
    //     }

    // }
    const addMember =async (member) => {
      try {
        const res = await axios.post(API_URL, member);
        setMembers([...members, res.data]);
        setPopupmember(res.data);
      } catch (err) { 
        console.log(err);
      }
    };

    const deleteMember = async (id) => {
      try{
        await axios.delete(`${API_URL}/${id}`);
        setMembers(members.filter(m => m.id !== id));
        if (popupMember?.id === id)setPopupmember(null);
      } catch (err){
        console.log(err); 
      }};

  //   const toggleLike =(id) => {
  //   setMembers((prev) =>
  //     prev.map((member) => 
  //     member.id === id? {...member, liked: !member.liked} : member)
  //   );

  //   if(popupMember?.id === id){
  //     setPopupmember((prev) => ({...prev,liked: !prev.liked}));
  //   }
  // };

  // const toggleFollowed =(id) => {
  //   setMembers ((prev) =>
  //     prev.map ((member) =>
  //     member.id === id? {...member,followed: !member.followed}:member)
  //   );

  //   if (popupMember?.id === id){
  //     setPopupmember((prev) => ({...prev,followed: !prev.followed}));
  //   }
  // };

  const toggleLike = async (id) => {
    try {
      const res = await axios.put(`${API_URL}/${id}/like`);
      setMembers(members.map(m => (m.id === id ? res.data : m)));
      if (popupMember?.id === id) {
        setPopupmember(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };


  const toggleFollowed = async (id) => {
    try {
      const res = await axios.put(`${API_URL}/${id}/follow`);
      setMembers(members.map(m => (m.id === id ? res.data : m)));
      if (popupMember?.id === id) {
        setPopupmember(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Banner />
      <Memberform onAdd={addMember}/>
      <MemberList
        members={members}
        onDelete={deleteMember}
        onLike={toggleLike}
        onFollow={toggleFollowed}
        />
        {popupMember && (
            <Popup member={popupMember} 
            liked={popupMember.liked}
            followed={popupMember.followed}
            onClose={() => setPopupmember(null)}
            onLike={() => toggleLike(popupMember.id)}
            onFollow={() => toggleFollowed(popupMember.id)}
            onDelete={() => deleteMember(members.findIndex((m) => m.id === popupMember.id))}
            
            
            />
         )}
        
    </div>
  )
}

export default Home
