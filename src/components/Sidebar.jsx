import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../config/sidebarMenu";

const Sidebar = () => {
  return (
    <div id="sidebar" className="app-sidebar" data-bs-theme="dark">
      <div className="app-sidebar-content" data-scrollbar="true" data-height="100%">
        <div className="menu">

          <div className="menu-header">Navigation</div>

          {/* DYNAMIC SIDEBAR MENU */}
          {sidebarMenu.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                (isActive ? "menu-item active" : "menu-item") +
                " text-decoration-none"
              }
            >
              <div className="menu-link">
                <div className="menu-icon">
                  <ion-icon
                    name={item.icon}
                    class={item.iconClass + " md hydrated"}
                  ></ion-icon>
                </div>
                <div className="menu-text">{item.label}</div>
              </div>
            </NavLink>
          ))}

          {/* COLLAPSE BUTTON */}
          {/* <div className="menu-item d-flex">
            <a
              href="javascript:;"
              className="app-sidebar-minify-btn ms-auto d-flex align-items-center text-decoration-none"
              data-toggle="app-sidebar-minify"
            >
              <ion-icon name="arrow-back" className="me-1"></ion-icon>
              <div className="menu-text">Collapse</div>
            </a>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
