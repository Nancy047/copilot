import React from "react";

import "../styles/Side.css"
import {
  FaHome,
  FaFileAlt,
  FaPalette,
  FaCode,
  FaFlask,
  FaBell,
  FaCog,
  FaUser,
} from "react-icons/fa";


import Logo from "./Logo";

import { FiLayers } from "react-icons/fi";

const Sidebar = () => { 
  return (
    <div className="sidebar">
      {/* Logo */}

      <div className="logo">
        <Logo />
      </div>

      {/* Sidebar Items */}

      <div className="sidebar-items">
        <SidebarItem icon={<FaHome />} label="Home" />

        <SidebarItem icon={<FaFileAlt />} label="Document" />

        <SidebarItem icon={<FaPalette />} label="Design" />

        <SidebarItem icon={<FaCode />} label="Coding" />

        <SidebarItem icon={<FiLayers />} label="Testing" />

        <SidebarItem icon={<FaBell />} label="Notification" />
      </div>

      {/* Settings and Profile Icons */}

      <div className="sidebar-icons">
        <SidebarIcon className="settings" icon={<FaCog />} />

        <div className="profile-button">JH</div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => {
  return (
    <div className="sidebar-item">
      <div className="icon">{icon}</div>

      <div className="label">{label}</div>
    </div>
  );
};

const SidebarIcon = ({ icon, label }) => {
  return (
    <div className="sidebar-icon">
      <div className="icon">{icon}</div>

      <div className="label">{label}</div>
    </div>
  );
};

export default Sidebar;
