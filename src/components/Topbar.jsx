import React from "react";
import { logout } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div id="header" className="app-header">

      {/* NAVBAR HEADER */}
      <div className="navbar-header">
        <a href="#" className="navbar-brand">
          <span className="navbar-logo"><ion-icon name="cloud"></ion-icon></span>
          <b className="me-1">SK360</b> 
        </a>

        <button
          type="button"
          className="navbar-mobile-toggler"
          data-toggle="app-sidebar-mobile"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>

      {/* HEADER NAV */}
      <div className="navbar-nav">

        {/* SEARCH */}
        <div className="navbar-item navbar-form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter keyword" />
            <button className="btn btn-search">
              <ion-icon name="search"></ion-icon>
            </button>
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="navbar-item dropdown">
          <a href="#" data-bs-toggle="dropdown" className="navbar-link dropdown-toggle icon">
            <ion-icon name="notifications"></ion-icon>
            <span className="badge">5</span>
          </a>

          <div className="dropdown-menu media-list dropdown-menu-end">
            <div className="dropdown-header">NOTIFICATIONS (5)</div>

            <a href="#" className="dropdown-item media">
              <div className="media-left">
                <i className="fa fa-bug media-object bg-gray-400"></i>
              </div>
              <div className="media-body">
                <h6 className="media-heading">Server Error Reports</h6>
                <div className="text-muted fs-10px">3 minutes ago</div>
              </div>
            </a>

          </div>
        </div>

        {/* USER MENU */}
        <div className="navbar-item navbar-user dropdown">
          <a href="#" className="navbar-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
            <img src="/assets/img/user/user-13.jpg" alt="" />
            <span>
              <span className="d-none d-md-inline">Admin</span>
              <b className="caret"></b>
            </span>
          </a>

          <div className="dropdown-menu dropdown-menu-end me-1">
            <a href="/profile" className="dropdown-item">Profile</a>
            <a href="#" className="dropdown-item">Settings</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item text-danger" onClick={handleLogout}>Log Out</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Topbar;
