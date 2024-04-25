import React from 'react';

const UserListItem = ({ user, onDelete, onEdit }) => {
  return (
    <li>
      <div>
        <strong>{user.name}</strong> - {user.username} - {user.email}
      </div>
      <button onClick={() => onEdit(user)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </li>
  );
};

export default UserListItem;