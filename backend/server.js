const express = require('express');
const multer = require('multer');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Enable CORS
app.use(cors());

// Handle preflight requests
app.options('/upload', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.send();
});

// Handle image uploads and PDF generation
app.post('/upload', upload.array('images'), (req, res) => {
  try {
    const images = req.files;
    const doc = new PDFDocument();
    const pdfPath = path.join(__dirname, 'output.pdf');

    images.forEach((image) => {
      // Ensure the image buffer is correctly handled
      const img = Buffer.from(image.buffer);
      doc.image(img, 0, 0, { width: 595 });
    });

    doc.pipe(fs.createWriteStream(pdfPath));
    doc.end();
    

    // Serve the PDF file for download
    res.json({ message: 'PDF created successfully', pdfPath: `/download` });
  } catch (error) {
    console.error('Error processing images:', error);
    res.status(500).json({ error: 'Failed to process images' });
  }
});

// Serve the generated PDF file
app.get('/download', (req, res) => {
  const pdfPath = path.join(__dirname, 'output.pdf');
  res.download(pdfPath, 'output.pdf', (err) => {
    if (err) {
      console.error('Error serving PDF:', err);
      res.status(500).send('Error serving PDF');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});