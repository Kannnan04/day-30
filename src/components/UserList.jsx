import React from 'react';
import UserListItem from './UserListItem';

const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <ul>
      {users.map((user) => (
        <UserListItem
          key={user.id}
          user={user}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default UserList;