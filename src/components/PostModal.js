import React,{useState} from "react";
import { createPortal } from "react-dom";
import "./PostModal.css";
import Axios from 'axios';

function PostModal({ isopen, openState }) {
  const [fileState,setFileState] = useState();
  const [captionState,setCaptionState] = useState();
  const image = new FormData();


  const sendData = async (image)=>{
    
    
   await Axios.post("http://localhost:5050/profile/load/789iujio",{
      image:image,
      caption:captionState,
    
  },{headers:{
    'accept':'application/json',
    "Content-Type":`multipart/form-data; boundary=${image._boundary}`,
  }}).then((res)=>{console.log(res)})

  }
  
  const MODAL_STYLE = {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "translate(-50%,-50%)",
    zIndex: "1000",
    height: "450Px",
    width: "350px",
    backgroundColor: "#fff",
    borderRadius: "5px",
  };
  const OVER_LAY = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: "1000",
  };
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    image.append("postimage",files,files.type)
    setFileState(image)
    console.log(image);
  };
  var el = document.querySelector("#portal");
  return isopen
    ? createPortal(
        <div className="Post__Modal">
          <div className="Post__Modal__Overlay" style={OVER_LAY}></div>
          <div className="Post__Modal__Outter__Container" style={MODAL_STYLE}>
            <div
              className="Post__Modal__Drop__Container"
              onDragOver={dragOver}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
              onDrop={fileDrop}
            >
              Drag and drop your image here <br></br>Or <br></br>
              <label className="Post__Modal__Choose__Label">
              <input type="file" className="Post__Modal__Drop__Choose__File" accept="image/*" onChange={(e)=>{
                const file = e.target.files[0];
                image.append("postimage",file,file.name);
                setFileState(image);
                console.log(image)
              }}/>
              choose file
              </label>
              
            </div>
            <div className="Post__Modal__Caption__Container">
              
              <input
                className="Post__Modal__Caption__Input"
                placeholder="Add your Caption"
                onChange={(e)=>{setCaptionState(e.target.value)}}
              />
              
            </div>
            <button className="Modal__Close__Btn" onClick={sendData}>Upload</button>
            <button
            
              className="Modal__Close__Btn"
              onClick={() => {
                openState(false);
              }}
            >
              Close
            </button>
          </div>
        </div>,
        el
      )
    : null;
}

export default PostModal;

