import { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { BsUpload } from 'react-icons/bs';
import { app } from './firebase';
import "./upload.css"

const storage = getStorage(app);

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      return; // Return early if file is null or undefined
    }
    const fileRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(fileRef, file);

    setUploading(true);
    setSuccess(false);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File uploaded successfully. URL:', downloadURL);
          setUploading(false);
          setSuccess(true);
        });
      }
    );
  };

  return (
    <div className="file-upload-container">
      <div className="file-input-container">
        <label htmlFor="file-input" className="file-input-label">
          <BsUpload className="upload-icon" />
          {file ? file.name : 'Select file'}
        </label>
        <input
          type="file"
          id="file-input"
          className="file-input"
          onChange={handleFileChange}
        />
      </div>
      <div className="upload-btn-container">
        <button className="upload-btn" onClick={handleUpload}>
          Upload
        </button>
        {uploading && (
          <div className="upload-progress">Uploading...</div>
        )}
        {success && (
          <div className="upload-progress success">File uploaded successfully</div>
        )}
        {!uploading && !success && (
          <div className="upload-progress">{uploadProgress}%</div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;






