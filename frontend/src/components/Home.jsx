import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    setImages(event.target.files);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Download the PDF
      const pdfUrl = `http://localhost:5000${response.data.pdfPath}`;
      window.location.href = pdfUrl;
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Image to PDF Converter</h1>
        
        <input 
          type="file" 
          multiple 
          accept="image/*" 
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-700 file:border file:rounded-md file:px-4 file:py-2 file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200 mb-4"
        />
        
        <button 
          onClick={handleSubmit} 
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Convert to PDF
        </button>
      </div>
    </div>
  );
};

export default Home;
