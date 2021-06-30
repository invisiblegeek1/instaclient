import React from "react";
import Avatar from "./Avatar";
import "./ProfileView.css";

function ProfileView() {
  return (
    <div className="Profil__Container">
      <div className="Profile__Inner__Container">
      <div className="Profile__Avatar__Metrics__Container">
        <div className="Profile__Avatar__Container">
          <Avatar Size="200px" />
        </div>
        <div className="Profile__Details__Container">
          <div className="Profile__User__Name">invisiblegeek_1</div>
          <div className="Profile__Metrics__Container">
            <div className="Profile__Post__Metrics">
              5 <label> posts</label>
            </div>
            <div className="Profile__Follower__Metrics">
              165
              <label> followers</label>
            </div>
            <div className="Profile__Following__Metrics">
              40
              <label> following</label>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>

      </div>
      
      
    </div>
  );
}

export default ProfileView;
