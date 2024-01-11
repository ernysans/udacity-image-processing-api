import express from 'express';
import path from "path";
import fs from "fs";

const routes = express.Router();

/**
 * Shows a list of available images with random sizes
 */
routes.get('/', (req, res) => {
  // List all files in images directory with filesystem
  const directoryPath = path.join(__dirname, '../../images');
  res.set('Cache-Control', 'no-store, max-age=0');
  fs.readdir(directoryPath, function (err: any, files: any) {
    if (err) {
      res.status(500);
      res.json({error: 'Unable to scan directory: ' + err});
      return;
    }
    // Return list of files as html with links
    res.set('Content-Type', 'text/html');
    res.status(200);
    res.write('<html><body>');
    res.write('<h1>Image Processing API</h1>');
    res.write("<br><br><a href='/'><strong>Refresh Size</strong></a><br><br><br><br>");
    res.write('<ul>');
    files.forEach(function (file: any) {
      // Random size between 600 and 1000
      const width = Math.floor(Math.random() * 400) + 600;
      const height = Math.floor(Math.random() * 800) + 300;
      res.write(`<li><a href="/images/${file}?width=${width}&height=${height}" target="_blank">${file} - Size: ${width}x${height}</a></li>`);
    });
    res.write('</ul>');
    res.write('</body></html>');
    res.end();
  });
});
export default routes;
