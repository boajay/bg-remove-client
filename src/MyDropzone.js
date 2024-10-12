'use client';

import React, { useContext, useState, useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { generateSign, uuidV4 } from './utils/utils';
import Header from './Header';
import Footer from './Footer';
import { auth } from './firebase';

const MyDropzone = () => {
  const { user } = useContext(UserContext);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const onDrop = useCallback((acceptedFiles) => {
    let downloaded = 0;
    setDownloadProgress(3);
    acceptedFiles.forEach(async (file) => {
      try {
        const secretKey = 'JKL_131';
        const nonce = uuidV4();
        const timestamp = Date.now();

        let formData = new FormData();
        formData.append('file', file);
        formData.append('nonce', nonce);
        formData.append('timestamp', timestamp);
        
        const signature = generateSign(JSON.stringify(formData), secretKey);

        auth.currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          // Send token to your backend via HTTPS
          // formData.append('idToken', idToken);
          
          axios.post('/removebgandcrop', formData, {
            baseURL:'https://bg-remove-api-1.onrender.com',
            responseType: 'blob',
            headers: {
              'x-signature': signature,
              'Authorization': `Bearer ${idToken}` 
            }
          }).then((response) => {
            // Display the result
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${Date.now()}.png`); // Or any other extension
            document.body.appendChild(link);
            link.click();
            link.remove();
  
            downloaded++;
            let downloadCompleted = Math.round((downloaded * 100) / acceptedFiles.length);
            setDownloadProgress(downloadCompleted);
          }).catch((error) => {
            console.log(error.message);
            console.log('FAILURE!!');
          });
        }).catch(function(error) {
          // Handle error
        });


        
      } catch (error) {
        // Logging error message
        console.error('Error:', error.message);
      }
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={styles.pageContainer}>
      <Header />
      <div style={styles.contentContainer}>
        <div className="upload-area" {...getRootProps()}>
          <input {...getInputProps()} />
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 8L12 3L7 8" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 3V15" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>上傳圖片或拖放圖片到這裡</p>

          {downloadProgress > 0 && (
            <div className="progress-bar">
              <div className="progress" style={{ width: `${downloadProgress}%` }}></div>
            </div>
          )}
          <style jsx>{`
            .upload-area {
              border: 2px dashed #ccc;
              padding: 20px;
              text-align: center;
            }
            .progress-bar {
              width: 100%;
              background-color: #f3f3f3;
              border-radius: 5px;
              margin-top: 10px;
            }
            .progress {
              height: 10px;
              background-color: #4caf50;
              border-radius: 5px;
            }
          `}</style>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f5f5f7',
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
};

export default MyDropzone;