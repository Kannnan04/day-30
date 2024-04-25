import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddUser = async (formData) => {
    try {
      const response = await axios.post(API_URL, {
        name: formData.name,
        username: formData.username,
        email: formData.email
      });
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };
  

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditUser = (user) => {
    setEditingUserId(user.id);
  };

  const handleUpdateUser = async (formData) => {
    try {
      await axios.put(`${API_URL}/${editingUserId}`, formData);
      setUsers(users.map(user => user.id === editingUserId ? { ...user, ...formData } : user));
      setEditingUserId(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onSubmit={editingUserId ? handleUpdateUser : handleAddUser} initialFormData={users.find(user => user.id === editingUserId)} />

      <UserList
        users={users}
        onDelete={handleDeleteUser}
        onEdit={handleEditUser}
      />
    </div>
  );
};

export default App;