"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
var CustomProcessor = /** @class */ (function (_super) {
    tslib_1.__extends(CustomProcessor, _super);
    function CustomProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomProcessor.prototype.displayJasmineStarted = function (info, log) {
        return "TypeScript ".concat(log);
    };
    return CustomProcessor;
}(jasmine_spec_reporter_1.DisplayProcessor));
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
    spec: {
        displayStacktrace: jasmine_spec_reporter_1.StacktraceOption.NONE
    },
    customProcessors: [CustomProcessor],
}));
//# sourceMappingURL=reporter.js.map