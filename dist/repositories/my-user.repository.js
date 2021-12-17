"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyUserRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let MyUserRepository = class MyUserRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.MyUser, dataSource);
    }
};
MyUserRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.itss')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.DbDataSource])
], MyUserRepository);
exports.MyUserRepository = MyUserRepository;
//# sourceMappingURL=my-user.repository.js.map