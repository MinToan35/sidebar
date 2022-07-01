import React from "react";
import logo from "../assets/logo.svg";
import { FaTimes } from "react-icons/fa";
import { links, social } from "../components/data";
import { useGlobalContext } from "../context/context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
      }`}
    >
      <div className="sidebar-header">
        <img className="logo" src={logo} alt="coding addict" />
        <button className="btn-close-sidebar" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="list-links">
        {links.map(({ id, url, text, icon }) => {
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="list-social">
        {social.map(({ id, url, icon }) => {
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
