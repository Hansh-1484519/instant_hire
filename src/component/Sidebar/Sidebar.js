import React, { useEffect, useState } from "react";
import axios from "axios";
import "./sidebar.css";

const Sidebar = () => {
  const [user, setUser] = useState([]);
  const getUser = () => {
    axios.get(process.env.REACT_APP_USER_API).then((response) => {
      // console.log(response.data.data);
      setUser(response.data.data);
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="UserDetails">
      <div>
        <img className="UserImage" src={user.pictureUrl} alt="user Info" />
      </div>
      <div className="UserInfo">
        <span>{user.name}</span>
        <p>{user.college}</p>
      </div>
    </div>
  );
};

export default Sidebar;
