import React from 'react';
import axios from 'axios';

const Preview = () => {
  const downloadPDF = async () => {
    try {
      const response = await axios.get('http://localhost:5000/output.pdf', {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'output.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">PDF Preview</h1>
      <button onClick={downloadPDF} className="bg-green-500 text-white px-4 py-2 rounded">
        Download PDF
      </button>
    </div>
  );
};

export default Preview;