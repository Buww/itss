"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyUser = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let MyUser = class MyUser extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MyUser.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MyUser.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MyUser.prototype, "password", void 0);
MyUser = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], MyUser);
exports.MyUser = MyUser;
//# sourceMappingURL=my-user.model.js.map