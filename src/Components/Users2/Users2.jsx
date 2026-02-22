import React, { use } from "react";

const Users2 = ({ usersPromise }) => {
  const data = use(usersPromise);
  console.log(data);
  return (
    <div>
      <p>Users 2 data is hare{data.length}</p>
    </div>
  );
};

export default Users2;
