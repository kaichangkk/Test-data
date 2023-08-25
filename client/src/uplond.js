import React, { useState } from 'react';
import Axios from 'axios';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
    reader.onload = (event) => {
      const fileData = event.target.result; 

        // Send the JSON data to the backend for insertion
        Axios.post('http://localhost:3001/insert', { fileData })
          .then(response => {
            console.log(response.data.message); // Success message from the server
          })
          .catch(error => {
            console.error('Error:', error);
          });
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <div className="App container">
      <h1>Insert Data JSON</h1>
      <div className="mb-3">
        <input
          type="file"
          accept=".json"
          onChange={handleFileChange}
        />
      </div>
      <button className='btn btn-success' onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default Upload;
