import React from "react";
import "./PostContainer.css";
import Avatar from "../components/Avatar";
import SvgPath from "../components/Svgpath";
import Data from "./Data"

function PostContainer() {
  return (
    <div className="Post__Article__Container">
      <article className="Post__Article">
        <div className="Post__Article__Header">
          <div className="Post__Header__Inner__Container">
            <Avatar Size="50px"  />
            <p className="Post__User__Name">pushparaja</p>
          </div>
        </div>

        <div className="Post__Image__Container">
          <img
            className="Post__image"
            alt=""
            src={Data.postImageUrl}
          ></img>
        </div>
        <div className="Post__User__Controls">
          <div className="Post__Like__Controls">
            
            <div className="Post__Like__Btn__Container">
              <svg
                aria-label="Like"
                className="_8-yf5 "
                fill="#ed4956"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d={SvgPath.liked}></path>
              </svg>
            </div>
            <div className="Post__Comment__Btn__Container">
              <svg
                aria-label="Comment"
                className="_8-yf5 "
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path
                  clip-rule="evenodd"
                  d={SvgPath.comment}
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="Post__Share__Btn__Container">
              <svg
                aria-label="Share Post"
                className="_8-yf5 "
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d={SvgPath.share}></path>
              </svg>
            </div>
          </div>

          <div className="Post__Save__Button__Container">
            <svg
              aria-label="Save"
              className="_8-yf5 "
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <path d={SvgPath.save}></path>
            </svg>
          </div>
        </div>
        
        <div className="Post__Caption__Container">{Data.postCaption}</div>
        <div className="Post__Comment__Outter__Container">{
          Data.commentsList.map((item,index)=>{
            return (
              <div key={index} className="Post__Comment__Container">
                <p className="Post__Commenter__Name">@{item.commenterName}</p><p className="Post__Comment">   {item.Comment}</p>
              </div>
            )
          })
        }</div>
        <hr id="Post__Horizontal__line"></hr>
        <div className="Post__Comment__Input__Container">
          
          
          <input className="Post__Comment__Input" placeholder="Add a comment...">
            
            </input>
            <p className="Post__Comment__Input__Btn">POST</p>
        </div>
      </article>
    </div>
  );
}

export default PostContainer;
