import React from "react";

import { poseImages } from "../../utils/pose_images";

import { Link } from "react-router-dom";

import "./DropDown.css";

export default function DropDown({ poseList, currentPose, setCurrentPose }) {
  return (
    <div className="dropdown dropdown-container">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        id="pose-dropdown-btn"
        aria-expanded="false"
      >
        {currentPose}
      </button>

      <ul
        class="dropdown-menu dropdown-custom-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        {poseList.map((pose) => (
          <li onClick={() => setCurrentPose(pose)}>
            <div class="dropdown-item-container">
              <div className="item-box">
                <p className="dropdown-item-1">{pose}</p>
                <img src={poseImages[pose]} className="dropdown-img" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
