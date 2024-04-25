import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const UserForm = ({ onSubmit, initialFormData }) => {
  const [formData, setFormData] = useState(initialFormData || {});

  // Update form data when initialFormData changes
  useEffect(() => {
    setFormData(initialFormData || {});
  }, [initialFormData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name || ''}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="username"
        value={formData.username || ''}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email || ''}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">{initialFormData ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;