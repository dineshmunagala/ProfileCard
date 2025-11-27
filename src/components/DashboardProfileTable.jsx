import React from "react";
import '../styles/DashboardTable.css';

const DashboardProfileTable = ({ members }) => {
  return (
    <div className="table-wrapper">
      <table className="profile-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Full Name</th>
            <th>Role</th>
            <th>Category</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Experience</th>
            <th>Skills</th>
          </tr>
        </thead>

        <tbody>
          {members.length === 0 ? (
            <tr>
              <td colSpan="8" className="empty-row">
                No Profiles Found
              </td>
            </tr>
          ) : (
            members.map((m) => (
              <tr key={m.id}>
                <td>
                  <img src={m.image} alt={m.name} className="table-photo" />
                </td>
                <td>{m.name}</td>
                <td>{m.role}</td>
                <td>{m.category}</td>
                <td>{m.email || "-"}</td>
                <td>{m.phone || "-"}</td>
                <td>{m.experience || "0"} yrs</td>
                <td>{m.skills || "-"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardProfileTable;
