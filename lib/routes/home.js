"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var path_1 = tslib_1.__importDefault(require("path"));
var fs_1 = tslib_1.__importDefault(require("fs"));
var routes = express_1.default.Router();
/**
 * Shows a list of available images with random sizes
 */
routes.get('/', function (req, res) {
    // List all files in images directory with filesystem
    var directoryPath = path_1.default.join(__dirname, '../../images');
    res.set('Cache-Control', 'no-store, max-age=0');
    fs_1.default.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500);
            res.json({ error: 'Unable to scan directory: ' + err });
            return;
        }
        // Return list of files as html with links
        res.set('Content-Type', 'text/html');
        res.status(200);
        res.write('<html><body>');
        res.write('<h1>Image Processing API</h1>');
        res.write("<br><br><a href='/'><strong>Refresh Size</strong></a><br><br><br><br>");
        res.write('<ul>');
        files.forEach(function (file) {
            // Random size between 600 and 1000
            var width = Math.floor(Math.random() * 400) + 600;
            var height = Math.floor(Math.random() * 800) + 300;
            res.write("<li><a href=\"/images/".concat(file, "?width=").concat(width, "&height=").concat(height, "\" target=\"_blank\">").concat(file, " - Size: ").concat(width, "x").concat(height, "</a></li>"));
        });
        res.write('</ul>');
        res.write('</body></html>');
        res.end();
    });
});
exports.default = routes;
//# sourceMappingURL=home.js.map