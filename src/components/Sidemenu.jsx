import React, { useState } from "react";
import { useNavigate } from "react-router";

import MainSidebar from "./MainSidebar";
import Sidemenu from "../components/Sidemenu";
import Chat from "./Chat";

import "../styles/Side.css";
import {
  FaHome,
  FaFileAlt,
  FaPalette,
  FaCode,
  FaFlask,
  FaBell,
  FaCog,
  FaUser,
  FaFile,
} from "react-icons/fa";

import Logo from "./Logo";

import { FiLayers } from "react-icons/fi";

const Sidebar = () => {
  const handleDesign = () => {
    navigate("/design");
    SetCurrentTab("design");
  };

  const [currentTab, SetCurrentTab] = useState("codeyy");
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      {/* Logo */}

      <div className="logo">
        <Logo />
      </div>

      {/* Sidebar Items */}

      <div className="sidebar-items">
        <div onClick={() => navigate("/")}>
          <SidebarItem icon={<FaCode />} label="Coding" />
        </div>

        <div onClick={() => handleDesign()}>
          <SidebarItem icon={<FaPalette />} label="Design" />
        </div>

        <SidebarItem icon={<FaFileAlt />} label="Requirement" />

        <SidebarItem icon={<FiLayers />} label="Testing" />
        <SidebarItem icon={<FaFile />} label="Deployment" />

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
