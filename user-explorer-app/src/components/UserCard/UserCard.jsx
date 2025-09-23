import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2 className="user-name">{user.name}</h2>
      <div className="user-info">
        <span>📧</span>
        <span className="user-email">{user.email}</span>
      </div>
      <div className="user-info">
        <span>📱</span>
        <span>{user.phone}</span>
      </div>
      <div className="user-info">
        <span>🌐</span>
        <span>{user.website}</span>
      </div>
      <div className="user-company">
        <div className="company-name">{user.company.name}</div>
        <div className="company-catchphrase">"{user.company.catchPhrase}"</div>
      </div>
    </div>
  );
};

export default UserCard;