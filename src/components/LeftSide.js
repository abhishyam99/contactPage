

import React, { useState } from "react";

const LeftSide = ({ formDataList, onDeleteUser }) => {
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [editedFormData, setEditedFormData] = useState({ name: "", email: "", phone: "" });

  const deleteUser = (index) => {
    const updatedFormDataList = [...formDataList];
    updatedFormDataList.splice(index, 1);
    onDeleteUser(updatedFormDataList);
  };

  const handleEditUser = (index) => {
    setSelectedUserIndex(index);
    setEditedFormData(formDataList[index]);
  };

  const handleSaveUser = (e) => {
    e.preventDefault();
    const updatedFormDataList = [...formDataList];
    updatedFormDataList[selectedUserIndex] = editedFormData;
    onDeleteUser(updatedFormDataList);
    setSelectedUserIndex(null);
    setEditedFormData({ name: "", email: "", phone: "" });
  };

  const handleCancelEdit = () => {
    setSelectedUserIndex(null);
    setEditedFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="left-side">
      <h2>User Information</h2>
      <ul>
        {formDataList.map((formData, index) => (
          <li key={index}>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Phone: {formData.phone}</p>
            {selectedUserIndex === index ? (
              <form onSubmit={handleSaveUser}>
                <label>
                  Name:
                  <input
                    type="text"
                    value={editedFormData.name}
                    onChange={(e) =>
                      setEditedFormData({ ...editedFormData, name: e.target.value })
                    }
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    value={editedFormData.email}
                    onChange={(e) =>
                      setEditedFormData({ ...editedFormData, email: e.target.value })
                    }
                    required
                  />
                </label>
                <label>
                  Phone:
                  <input
                    type="tel"
                    value={editedFormData.phone}
                    onChange={(e) =>
                      setEditedFormData({ ...editedFormData, phone: e.target.value })
                    }
                    required
                  />
                </label>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <button className="edit_button" onClick={() => handleEditUser(index)}>
                  Edit
                </button>
                <button className="delete_button" onClick={() => deleteUser(index)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSide;

