import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div id="sidebar" className="app-sidebar" data-bs-theme="dark">
      <div
        className="app-sidebar-content"
        data-scrollbar="true"
        data-height="100%"
      >
        <div className="menu">
          <div className="menu-header">Navigation</div>

          {/* DASHBOARD */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              (isActive ? "menu-item active" : "menu-item") +
              " text-decoration-none"
            }
          >
            <div className="menu-link">
              <div className="menu-icon">
                <ion-icon name="pulse-outline"></ion-icon>
              </div>
              <div className="menu-text">Dashboard</div>
            </div>
          </NavLink>

          {/* USERS */}
          <NavLink
            to="/users"
            className={({ isActive }) =>
              (isActive ? "menu-item active" : "menu-item") +
              " text-decoration-none"
            }
          >
            <div className="menu-link">
              <div className="menu-icon">
                <i className="fa fa-users"></i>
              </div>
              <div className="menu-text">User Management</div>
            </div>
          </NavLink>

          {/* COLLAPSE BUTTON */}
          <div className="menu-item d-flex">
            <a
              href="javascript:;"
              className="app-sidebar-minify-btn ms-auto d-flex align-items-center text-decoration-none"
              data-toggle="app-sidebar-minify"
            >
              <ion-icon name="arrow-back" className="me-1"></ion-icon>
              <div className="menu-text">Collapse</div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
