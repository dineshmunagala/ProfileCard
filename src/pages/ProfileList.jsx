
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "../components/ProfileCard";
import DashboardLayout from "../components/DashboardLayout";
import DashboardProfileTable from "../components/DashboardProfileTable";


const API_URL = "http://localhost:8083/api/members";

const ProfileList = ({ members: propsMembers, deleteMember, toggleLike, toggleFollow }) => {
  const [members, setMembers] = useState(propsMembers);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  
  useEffect(() => {
    setMembers(propsMembers);
  }, [propsMembers]);

  
  const fetchAll = () =>
    axios.get(API_URL).then((res) => setMembers(res.data));

  const fetchDept = (dept) =>
    axios.get(`${API_URL}/${dept}`).then((res) => setMembers(res.data));

  
  useEffect(() => {
    if (activeFilter === "All") fetchAll();
    else if (activeFilter === "IT") fetchDept("it");
    else if (activeFilter === "Management") fetchDept("management");
    else if (activeFilter === "Creative") fetchDept("creative");
  }, [activeFilter]);

 
  const filteredMembers = members.filter((m) => {
    const t = searchText.toLowerCase();
    return (
      m.name.toLowerCase().includes(t) ||
      (m.role && m.role.toLowerCase().includes(t)) ||
      (m.skills && m.skills.toLowerCase().includes(t))
    );
  });

  return (
    <DashboardLayout>
    <div className="profiles-container">
      <h1 className="page-title">Team Profiles</h1>

      
      <div className="filter-bar">
        {[
          { key: "All", icon: "🌐" },
          { key: "IT", icon: "💻" },
          { key: "Management", icon: "📊" },
          { key: "Creative", icon: "🎨" }
        ].map((f) => (
          <button
            key={f.key}
            className={`filter-chip ${activeFilter === f.key ? "active" : ""}`}
            onClick={() => setActiveFilter(f.key)}
          >
            <span className="chip-icon">{f.icon}</span>
            {f.key}
          </button>
        ))}
      </div>

      
      <input
        type="text"
        placeholder="Search by name, role, or skills..."
        className="search-bar"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      
      {/* <div className="members-list">
        {filteredMembers.length ? (
          filteredMembers.map((m) => (
            <ProfileCard
              key={m.id}
              {...m}
              onDelete={() => deleteMember(m.id)}    
              onLike={() => toggleLike(m.id)}         
              onFollow={() => toggleFollow(m.id)}     
            />
          ))
        ) : (
          <p className="empty">No profiles found</p>
        )}
      </div> */}
      <div className="profile-table-wrapper">
       {filteredMembers.length ? (
    <DashboardProfileTable members={filteredMembers} />
      ) : (
        <p className="empty">No profiles found</p>
     )}
    </div>

    </div>
    </DashboardLayout>
  );
};

export default ProfileList;
