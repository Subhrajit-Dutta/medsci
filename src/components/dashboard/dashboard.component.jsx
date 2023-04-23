import React, { useState, Fragment, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/user.context";
import { useNavigate, Outlet, Link, useLocation } from "react-router-dom";
import { MdExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsIncognito } from "react-icons/bs";
import { MdMeetingRoom } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { userSignOut } from "../../utils/firebase.utils";
import "./dashboard.styles.scss";

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(1);

  const handleLinkClick = (index) => {
    setSelectedLinkIndex(index);
  };

  const links = [
    { icon: <CgProfile />, label: "Profile" },
    { icon: <MdExplore />, label: "Explore" },
    { icon: <BsIncognito />, label: "Doctors" },
    { icon: <AiFillSchedule />, label: "Schedule" },
    { icon: <MdMeetingRoom />, label: "Home" },
  ];

  const renderLinks = () => {
    return links.map((link, index) => (
      <Link
        key={index}
        className={`side-link ${selectedLinkIndex === index ? "selected" : ""}`}
        onClick={() => handleLinkClick(index)}
        to={
          index === 0
            ? "/dashboard/profile"
            : index === 1
            ? "/dashboard/explore"
            : index === 2
            ? "/dashboard/doctors"
            : index === 3
            ? "/dashboard/schedule"
            : index === 4
            ? "/"
            : ""
        }
      >
        {link.icon}
        {link.label}
      </Link>
    ));
  };

  if (!currentUser) {
    // If there's no current user, navigate back to the login screen
    navigate("/auth");
  }

  useEffect(() => {
    // If the current route is /dashboard, navigate to /dashboard/explore
    if (location.pathname === "/dashboard") {
      navigate("/dashboard/explore");
    }
  }, [navigate, location.pathname]);

  return (
    <div className="dashboard">
      {currentUser ? (
        <Fragment>
          <div className="sidebar">
            <div className="sidebar-wrapper">
              {renderLinks()}
              <Link className="side-link">
                <MdDarkMode />
                Dark Mode
              </Link>
              <Link className="side-link" onClick={userSignOut}>
                <FiLogOut />
                Log Out
              </Link>
            </div>
          </div>
          <Outlet />
        </Fragment>
      ) : (
        <div className="not-auth">
          <h1>
            Not logged in. <br />
            Please{" "}
            <Link className="span" to="/auth">
              log in
            </Link>{" "}
            to continue.
          </h1>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
