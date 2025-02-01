
# Image to PDF Converter

A web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to upload multiple images and convert them into a single PDF file. The application supports common image formats such as JPG, PNG, and JPEG.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Upload multiple images (JPG, PNG, JPEG).
- Convert uploaded images into a single PDF file.
- Preview the PDF before downloading.
- Responsive design for a seamless user experience.

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS
  - Axios
  - React Router

- **Backend:**
  - Node.js
  - Express.js
  - Multer (for file uploads)
  - PDFKit (for PDF generation)
  - CORS (for handling cross-origin requests)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- MongoDB (for storing user data, if needed)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/priyanshu6091/image-to-pdf-converter.git
   cd image-to-pdf-converter
   ```
2. Install dependencies for both the frontend and backend:
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

### Running the Application

1. Start the backend server:
   ```bash
   npm run server
   ```
2. Start the frontend development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to http://localhost:5173 to access the application.

## Usage

### Upload Images:
- Click the "Choose Files" button to select multiple images.
- Supported formats include JPG, PNG, and JPEG.

### Convert to PDF:
- Click the "Convert to PDF" button to generate the PDF.
- The application will display a preview of the PDF.

### Download PDF:
- Click the "Download PDF" button to save the generated PDF to your device.

## Contributing

Contributions are welcome! Please follow these guidelines if you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to your fork.
4. Create a pull request detailing your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or feedback, please contact galanipriyanshu@gmail.com.
