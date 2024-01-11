"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var resizeImage_1 = tslib_1.__importDefault(require("../utils/resizeImage"));
var routes = express_1.default.Router();
routes.get('/:name', function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var name, width, height, _a, _b, error_1;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                name = req.params.name;
                width = req.query.width ? parseInt(req.query.width) : null;
                height = req.query.height ? parseInt(req.query.height) : null;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                res.set('Cache-Control', 'public, max-age=604800, immutable');
                res.set('Content-Type', 'image/jpeg');
                _b = (_a = res).send;
                return [4 /*yield*/, (0, resizeImage_1.default)({ name: name, width: width, height: height })];
            case 2:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _c.sent();
                res.status(500);
                res.set('Content-Type', 'application/json');
                res.set('Cache-Control', 'no-store, max-age=0');
                res.json({ error: error_1.toString() });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = routes;
//# sourceMappingURL=images.js.map