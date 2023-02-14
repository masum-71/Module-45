import React from "react";

const Users = ({ user }) => {
  const { name, email, website } = user;
  return (
    <div className="users">
      <h1>Name: {name}</h1>
      <h4>email: {email}</h4>
      <p>Website: {website}</p>
    </div>
  );
};

export default Users;
