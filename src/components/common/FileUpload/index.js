import { TextField } from "@mui/material";
import React from "react";
import pfgimg from "../../../assects/pfgimg.png";

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {storage} from "../../../firebaseconfig";
function FileUpload({ filetype, onUpload, value,disabled }) {
  const upload = (e) => {
    const file = e.target.files[0];
    console.log(file);

    const storageRef = ref(storage, `${filetype}/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error,'error');
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          onUpload(downloadURL);
        });
      }
    );
  };
  return (
    <div>
      <div>
        <label className="onboarding-label">resume</label>

        <TextField
        disabled={disabled}
          id="outlined-basic"
          variant="outlined"
          fullWidth
          inputProps={{accept:filetype==='doc'?"application/pdf":'image/*'}}
        
          size="small"
          type={"file"}
          onChange={(e) => upload(e)}
        />
      </div>
      {filetype === "doc" && value ? (
        <div style={{ margin: "20px" }}>
          <img src={pfgimg} width="100px" alt="pfgimg" />
        </div>
      ) : filetype === "image" && value ? (
        <div style={{ margin: "20px" }}>
          <img src={value} width="100px" alt="pfgimg" />
        </div>
      ) : null}
    </div>
  );
}

export default FileUpload;
