import React, { useState } from 'react';
import LeftSide from './LeftSide';

const RightSide = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formDataList, setFormDataList] = useState([]);
  const onDeleteUser = (updatedFormDataList) => {
   setFormDataList(updatedFormDataList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate name
    if (!name || name.length < 2) {
      alert('Please enter a valid name with at least 2 characters.');
      return;
    }
  
    // Validate email
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!email || !emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
  
    // Add new form data to list
    const newFormData = {
      name,
      email,
      phone
    };
    setFormDataList([...formDataList, newFormData]);
    setName('');
    setEmail('');
    setPhone('');
  }

    return (
      <div className="main">
        <LeftSide formDataList={formDataList} onDeleteUser={onDeleteUser} />
        <div className="right-side">
          <h2>User Input</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required 
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
}

export default RightSide;
