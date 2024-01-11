"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var supertest_1 = tslib_1.__importDefault(require("supertest"));
var index_1 = tslib_1.__importDefault(require("../index"));
var sharp_1 = tslib_1.__importDefault(require("sharp"));
var request = (0, supertest_1.default)(index_1.default);
describe('Test home responses', function () {
    it('gets the / path with status code 200', function (done) {
        request.get('/').end(function (err, res) {
            if (err) {
                if (err)
                    throw err;
            }
            expect(res.status).toBe(200);
            done();
        });
    });
});
describe('Test endpoint responses', function () {
    it('gets images/santamonica.jpg original image', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/images/santamonica.jpg')];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    expect(res.headers['content-type']).toBe('image/jpeg');
                    return [2 /*return*/];
            }
        });
    }); });
    it('gets images/santamonica.jpg resized image', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var width, height, res, imageSharp, metadata;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    width = 500;
                    height = 600;
                    return [4 /*yield*/, request.get("/images/santamonica.jpg?width=".concat(width, "&height=").concat(height))];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    expect(res.headers['content-type']).toBe('image/jpeg');
                    imageSharp = (0, sharp_1.default)(res.body);
                    return [4 /*yield*/, imageSharp.metadata()];
                case 2:
                    metadata = _a.sent();
                    expect(metadata.width).toBe(width);
                    expect(metadata.height).toBe(height);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=indexSpec.js.map