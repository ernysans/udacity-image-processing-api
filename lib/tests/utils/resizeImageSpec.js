"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var sharp_1 = tslib_1.__importDefault(require("sharp"));
var resizeImage_1 = tslib_1.__importDefault(require("../../utils/resizeImage"));
describe('Test resizeImage function', function () {
    var fileName = 'santamonica.jpg';
    beforeEach(function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    });
    it("Gets ".concat(fileName, " original file"), function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var width, height, image, imageSharp, metadata;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    width = 1920;
                    height = 1273;
                    return [4 /*yield*/, (0, resizeImage_1.default)({ name: fileName })];
                case 1:
                    image = _a.sent();
                    imageSharp = (0, sharp_1.default)(image);
                    return [4 /*yield*/, imageSharp.metadata()];
                case 2:
                    metadata = _a.sent();
                    expect(metadata.width).toBe(width);
                    expect(metadata.height).toBe(height);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Gets ".concat(fileName, " resized file: width and height"), function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var width, height, image, imageSharp, metadata;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    width = 500;
                    height = 600;
                    return [4 /*yield*/, (0, resizeImage_1.default)({ name: fileName, height: height, width: width })];
                case 1:
                    image = _a.sent();
                    imageSharp = (0, sharp_1.default)(image);
                    return [4 /*yield*/, imageSharp.metadata()];
                case 2:
                    metadata = _a.sent();
                    expect(metadata.width).toBe(width);
                    expect(metadata.height).toBe(height);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Gets ".concat(fileName, " resized file: width and NO height"), function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var width, image, imageSharp, metadata;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    width = 500;
                    return [4 /*yield*/, (0, resizeImage_1.default)({ name: fileName, width: width })];
                case 1:
                    image = _a.sent();
                    imageSharp = (0, sharp_1.default)(image);
                    return [4 /*yield*/, imageSharp.metadata()];
                case 2:
                    metadata = _a.sent();
                    expect(metadata.width).toBe(width);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Gets ".concat(fileName, " resized file: height and NO width"), function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var height, image, imageSharp, metadata;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    height = 600;
                    return [4 /*yield*/, (0, resizeImage_1.default)({ name: fileName, height: height })];
                case 1:
                    image = _a.sent();
                    imageSharp = (0, sharp_1.default)(image);
                    return [4 /*yield*/, imageSharp.metadata()];
                case 2:
                    metadata = _a.sent();
                    expect(metadata.height).toBe(height);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=resizeImageSpec.js.map