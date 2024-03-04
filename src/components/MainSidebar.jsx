import React, { useEffect } from "react";
import "/Users/support/Downloads/reference-bot/src/styles/Sidebar.scss";

import { RiHome2Fill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";

import Staricon from "/Users/support/Downloads/reference-bot/src/assets/staricon.png";

const SideBar = () => {
  return (
    <div className="sidebar-main">
      <div className="sidebar-logo">Activity</div>
      <div className="nav_container">
        <div className="main_Content">
          <div className="main_heading">
            <a href="#" className="sub_headig">
              <span className="side-icons">
                <img src={Staricon}></img>
              </span>{" "}
              Popular
            </a>
          </div>
          <div className="Content">
            <a href="#" className="sub_content">
              Answer Question
            </a>
            <a href="#" className="sub_content">
              Code Generator
            </a>
          </div>
        </div>

        <div className="main_Content">
          <div className="main_heading">
            <a href="#" className="sub_headig">
              <span className="side-icons">
                <img src={Staricon}></img>
              </span>{" "}
              Code
            </a>
          </div>
          <div className="Content">
            <a href="#" className="sub_content">
              Bug detector
            </a>
            <a href="#" className="sub_content">
              Code Explainer
            </a>
            <a href="#" className="sub_content">
              Code review
            </a>
          </div>
        </div>

        <div className="main_Content">
          <div className="main_heading">
            <a href="#" className="sub_headig">
              <span className="side-icons">
                <img src={Staricon}></img>
              </span>{" "}
              utilities
            </a>
          </div>
          <div className="Content">
            <a href="#" className="sub_content">
              Code Compalier
            </a>
            <a href="#" className="sub_content">
              Code Convertor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
