"use strict";
// Copyright IBM Corp. 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductController = class ProductController {
    constructor(productRepository, geoService) {
        this.productRepository = productRepository;
        this.geoService = geoService;
    }
    async create(product) {
        return this.productRepository.create(product);
    }
    async find(filter) {
        return this.productRepository.find(filter);
    }
    async findById(id, filter) {
        return this.productRepository.findById(id, filter);
    }
    async updateById(id, product) {
        await this.productRepository.updateById(id, product);
    }
    async deleteById(id) {
        await this.productRepository.deleteById(id);
    }
    async deleteAll() {
        console.log(await this.productRepository.deleteAll());
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('api/product/add'),
    (0, rest_1.response)(200, {
        description: 'Product model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Product) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Product, {
                    title: 'NewProduct',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('api/products'),
    (0, rest_1.response)(200, {
        description: 'Array of Product model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Product, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Product)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('api/product/{id}'),
    (0, rest_1.response)(200, {
        description: 'Product model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Product, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Product, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('api/product/{id}'),
    (0, rest_1.response)(204, {
        description: 'Product PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Product, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Product]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('api/product/{id}'),
    (0, rest_1.response)(204, {
        description: 'Product DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "deleteById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('api/products'),
    (0, rest_1.response)(204, {
        description: 'Products DELETE success',
    }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductController.prototype, "deleteAll", null);
ProductController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt') // <---- Apply the @authenticate decorator at the class level
    ,
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ProductRepository)),
    (0, tslib_1.__param)(1, (0, core_1.inject)('services.Geocoder')),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ProductRepository, Object])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map