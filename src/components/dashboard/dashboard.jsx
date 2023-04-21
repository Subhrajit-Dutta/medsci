import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/user.context";

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div>{currentUser ? <div>Dashboard</div> : <div>Not logged in</div>}</div>
  );
};

export default Dashboard;
