
// import React, { useRef, useState } from 'react'


// const Memberform = ({ onAdd }) => {
//   const [name, setName] = useState("");
//   const [bio, setBio] = useState("");
//   const [image, setImage] = useState("");
//   const fileInputRef = useRef(null);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result); 
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !bio || !image) {
//       alert("Please fill all fields");
//       return;
//     }

//     const newMember = { name, bio, image };

//     onAdd(newMember);

//     setName("");
//     setBio("");
//     setImage("");
//     fileInputRef.current.value = "";
//   };

//   return (
//     <div className="form-section" id="team">
//       <h2>Add Team Members</h2>

//       <form className="member-form" onSubmit={handleSubmit}>
//         <input type="text" placeholder="Enter Name"
//           value={name} onChange={(e) => setName(e.target.value)} />

//         <input type="text" placeholder="Enter Bio"
//           value={bio} onChange={(e) => setBio(e.target.value)} />

//         <input type="file" ref={fileInputRef}
//           accept="image/*" onChange={handleImageUpload} />

//         {image && <img src={image} alt="Preview" className="preview-img" />}

//         <button type="submit">Add Member</button>
//       </form>
//     </div>
//   )
// }

// export default Memberform
import React, { useRef, useState } from "react";

const Memberform = ({ onAdd }) => {
  const [member, setMember] = useState({
    name: "",
    bio: "",
    role: "",
    experience: "",
    phone: "",
    image: "",
  });

  const fileInputRef = useRef(null);

  const updateField = (key, value) => {
    setMember({ ...member, [key]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => updateField("image", reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!member.name || !member.bio || !member.role || !member.image) {
      alert("Please fill all required fields (*)");
      return;
    }

    onAdd(member);

    setMember({
      name: "",
      bio: "",
      role: "",
      experience: "",
      phone: "",
      image: "",
    });

    fileInputRef.current.value = "";
  };

  return (
    <div className="form-section" id="team">
      <h2>Add Team Member</h2>

      <form className="member-form" onSubmit={handleSubmit}>
        
        
        <div className="form-block">
          <h3>Personal Details</h3>

          <input
            type="text"
            placeholder="Full Name *"
            value={member.name}
            onChange={(e) => updateField("name", e.target.value)}
          />

          <input
            type="text"
            placeholder="Short Bio *"
            value={member.bio}
            onChange={(e) => updateField("bio", e.target.value)}
          />
           <select
            value={member.role}
            onChange={(e) => updateField("role", e.target.value)}
          >
            <option value="">Select Role *</option>
              <optgroup label="IT Roles">
              <option>Software Developer</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
              <option>UI/UX Designer</option>
              <option>QA Tester</option>
              <option>Data Analyst</option>
              <option>DevOps Engineer</option>
            </optgroup>

             <optgroup label="Management Roles">
              <option>Project Manager</option>
              <option>Product Manager</option>
              <option>Team Lead</option>
              <option>HR Manager</option>
              <option>Operations Manager</option>
            </optgroup>

           
            <optgroup label="Creative Roles">
              <option>Content Writer</option>
              <option>Digital Marketer</option>
              <option>Graphic Designer</option>
              <option>Social Media Manager</option>
              <option>Video Editor</option>
            </optgroup>
          </select>
        <input
            type="number"
            placeholder="Experience (Years)"
            value={member.experience}
            onChange={(e) => updateField("experience", e.target.value)}
          />
        <input
            type="text"
            placeholder="Phone Number"
            value={member.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />

          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageUpload}
          />

          {member.image && (
            <img src={member.image} alt="Preview" className="preview-img" />
          )}

          <button type="submit" className="submit-btn">
          Add Member
        </button>
        
        </div>

      </form>
    </div>
  );
};

export default Memberform;
