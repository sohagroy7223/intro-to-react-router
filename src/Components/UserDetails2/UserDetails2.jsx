import React, { use } from "react";

const UserDetails2 = ({ userPromise }) => {
  const userData = use(userPromise);
  //   console.log(userData);
  const { website, company, username } = userData;

  return (
    <div>
      <h3>company: {company.name}</h3>
      <p>user_name: {username}</p>
      <p>website: {website}</p>
    </div>
  );
};

export default UserDetails2;
