// import React, { useRef, useState } from 'react'

// const Memberform = ({onAdd}) => {

//     const [name,setName] = useState("");
//     const [bio,setBio] = useState("");
//     const [image,setImage] = useState("");
//     const fileInputRef =useRef(null);

//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         if(file) setImage(URL.createObjectURL(file));
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if(!name || !bio || !image){
//             alert ("please fill all fields");
//             return;
//         }

//     const newMember = {
//         id: Date.now(),
//         name,
//         bio,
//         image,
//     };

//     onAdd(newMember);
//     setName("");
//     setBio("");
//     setImage("");
//     fileInputRef.current.value = "";
// };

//   return (
//     <div className="form-section" id="team">
//         <h2>Add Team Members</h2>

//         <form className="member-form" onSubmit={handleSubmit}>
//             <input
//              type="text"
//              placeholder="Enter Name"
//              value={name}
//              onChange={(e) =>setName(e.target.value)}
//             />
//             <input
//              type="text"
//              placeholder="Enter Bio"
//              value={bio}
//              onChange={(e) =>setBio(e.target.value)}
//             />
//             <input
//              type="file"
//              placeholder="image/*"
//              ref={fileInputRef}
//              onChange={handleImageUpload}
//             />

//             {image && <img src={image} alt="Preview" className="preview-img" /> }
//             <button type="submit">Add Member</button>
//         </form>
      
//     </div>
//   )
// }

// export default Memberform

import React, { useRef, useState } from 'react'

const Memberform = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // BASE64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !bio || !image) {
      alert("Please fill all fields");
      return;
    }

    const newMember = { name, bio, image };

    onAdd(newMember);

    setName("");
    setBio("");
    setImage("");
    fileInputRef.current.value = "";
  };

  return (
    <div className="form-section" id="team">
      <h2>Add Team Members</h2>

      <form className="member-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name"
          value={name} onChange={(e) => setName(e.target.value)} />

        <input type="text" placeholder="Enter Bio"
          value={bio} onChange={(e) => setBio(e.target.value)} />

        <input type="file" ref={fileInputRef}
          accept="image/*" onChange={handleImageUpload} />

        {image && <img src={image} alt="Preview" className="preview-img" />}

        <button type="submit">Add Member</button>
      </form>
    </div>
  )
}

export default Memberform
