"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColaboradorController = void 0;
const common_1 = require("@nestjs/common");
const colaborador_service_1 = require("../services/colaborador.service");
const colaborador_entity_1 = require("../entities/colaborador.entity");
let ColaboradorController = class ColaboradorController {
    colaboradorService;
    constructor(colaboradorService) {
        this.colaboradorService = colaboradorService;
    }
    findAll() {
        return this.colaboradorService.findAll();
    }
    findById(id) {
        return this.colaboradorService.findById(id);
    }
    findByNome(nome) {
        return this.colaboradorService.findByNome(nome);
    }
    create(colaborador) {
        return this.colaboradorService.create(colaborador);
    }
    delete(id) {
        return this.colaboradorService.delete(id);
    }
    update(colaborador) {
        return this.colaboradorService.update(colaborador);
    }
};
exports.ColaboradorController = ColaboradorController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ColaboradorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ColaboradorController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('/nome/:nome'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ColaboradorController.prototype, "findByNome", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [colaborador_entity_1.Colaborador]),
    __metadata("design:returntype", Promise)
], ColaboradorController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ColaboradorController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [colaborador_entity_1.Colaborador]),
    __metadata("design:returntype", Promise)
], ColaboradorController.prototype, "update", null);
exports.ColaboradorController = ColaboradorController = __decorate([
    (0, common_1.Controller)('/colaboradores'),
    __metadata("design:paramtypes", [colaborador_service_1.ColaboradorService])
], ColaboradorController);
//# sourceMappingURL=colaborador.controller.js.map