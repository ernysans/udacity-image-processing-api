"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var home_1 = tslib_1.__importDefault(require("./routes/home"));
var images_1 = tslib_1.__importDefault(require("./routes/images"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/', home_1.default);
app.use('/images', images_1.default);
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
exports.default = app;
//# sourceMappingURL=index.js.map