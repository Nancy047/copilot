import React, { useState, useRef } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faTimes } from '@fortawesome/free-solid-svg-icons';

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const fileInputRef = useRef(null);
  const [show, setShow] = useState(null);
 

  const onFileChange = (event) => {
    const newFiles = Array.from(event.target.files);

    // Append new files to the existing array of files

    setUploadedFiles((prevFiles) => [
      ...prevFiles,

      ...newFiles.map((file) => ({
        name: file.name,

        size: file.size,

        url: URL.createObjectURL(file),
      })),
    ]);
  };

  const handleUpload = async() => {

    if (!uploadedFiles) {
    
    return;
    }
    

    const formData = new FormData();
    formData.append("file", uploadedFiles);
    
    console.log(formData, "formadata", uploadedFiles, "uploadfiles");

    try {
    
    const response = await axios.post("http://34.122.87.129:8000/upload", formData, {
     
    headers: {  
    "Content-Type": "multipart/form-data",
    }
    });
    
    if (response.status == 200) {
    
    console.log(response, "succes uploadresponse");
 
    //alert('File uploaded successfully');
    
} else { 
    alert("Upload failed");
    }

    } catch (error) {
    
    console.error("Error uploading file:", error);
       
    alert("An error occurred while uploading the file");  
    
    }
}
    
    

  const deleteFile = (index) => {
    const updatedFiles = [...uploadedFiles];

    updatedFiles.splice(index, 1);

    setUploadedFiles(updatedFiles);
    setShow(false);
  };

  const showFileInput = () => {
    fileInputRef.current.click();
    setShow(true);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button style={uploadButtonStyles} onClick={showFileInput}>
        Add Files
      </button>

      <input
        type="file"
        accept=".jpg, .jpeg, .png, .gif, .bmp, .pdf"
        style={{ display: "none" }}
        ref={fileInputRef}
        multiple
        onChange={onFileChange}
      />

      {uploadedFiles.length > 0 && (
        <div style={fileListStyles}>
          <div style={fileListContainerStyles}>
            {uploadedFiles.map((file, index) => (
              <div key={index} style={fileItemStyles}>
                <div style={{ whiteSpace: "nowrap" }}>{file.name}</div>

                <div
                  onClick={() => deleteFile(index)}
                  style={{ cursor: "pointer" }}
                >
                  x
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {show && <div className="click" onClick={handleUpload}>click here</div>}
    </div>
  );
};

const uploadButtonStyles = {
  padding: "5px",

  cursor: "pointer",

  border: "none",

  borderRadius: "5px",

  backgroundColor: "#007bff",

  color: "white",

  fontSize: "16px",

  margin: "10px",

  height: "30px",
  marginLeft: "3%",
  border: "1px solid black",
  height: "32px",
  width: "94px",
};

const fileListStyles = {};

const fileListContainerStyles = {
  display: "flex",
  flexDirection: "row",
  gap: "10px",
};

const fileItemStyles = {
  display: "flex",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: "5px",
  gap: "10px ",
};

export default FileUpload;
