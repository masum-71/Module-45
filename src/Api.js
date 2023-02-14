import React, { useEffect, useState } from "react";
import Users from "./Users";

const Api = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  console.log(users);
  return (
    <div>
      {users.map((user, id) => (
        <Users key={id} user={user}></Users>
      ))}
    </div>
  );
};

export default Api;
