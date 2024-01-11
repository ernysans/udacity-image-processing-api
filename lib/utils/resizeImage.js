"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var fs_1 = tslib_1.__importDefault(require("fs"));
var sharp_1 = tslib_1.__importDefault(require("sharp"));
/**
 * Resize image with sharp
 * @param {ResizeImageOptions} options
 * @return {Promise<Buffer>}
 */
exports.default = (function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var width, height, name, directoryPath, filePath, fileAsBuffer, optionsImage, base;
    return tslib_1.__generator(this, function (_a) {
        width = options.width, height = options.height, name = options.name;
        directoryPath = path_1.default.join(__dirname, '../../images');
        filePath = path_1.default.join(directoryPath, name);
        // Check if file exists
        if (!fs_1.default.existsSync(filePath)) {
            throw new Error('File not found');
        }
        fileAsBuffer = fs_1.default.readFileSync(filePath);
        if (!(width || height)) {
            return [2 /*return*/, fileAsBuffer];
        }
        optionsImage = {
            width: width,
            height: height,
            fit: width && height ? sharp_1.default.fit.cover : sharp_1.default.fit.inside,
        };
        base = (0, sharp_1.default)(fileAsBuffer).resize(optionsImage).jpeg();
        // Return image as Buffer
        return [2 /*return*/, base.toBuffer()];
    });
}); });
//# sourceMappingURL=resizeImage.js.map