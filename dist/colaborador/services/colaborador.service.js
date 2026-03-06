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
exports.ColaboradorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const colaborador_entity_1 = require("../entities/colaborador.entity");
const typeorm_2 = require("typeorm");
let ColaboradorService = class ColaboradorService {
    colaboradorRepository;
    constructor(colaboradorRepository) {
        this.colaboradorRepository = colaboradorRepository;
    }
    async findAll() {
        return this.colaboradorRepository.find();
    }
    async findById(id) {
        const colaborador = await this.colaboradorRepository.findOne({ where: { id } });
        if (!colaborador)
            throw new common_1.HttpException('Colaborador não encontrado', common_1.HttpStatus.NOT_FOUND);
        return colaborador;
    }
    async findByNome(nome) {
        return this.colaboradorRepository.find({
            where: {
                nome: (0, typeorm_2.Like)(`%${nome}%`)
            }
        });
        ;
    }
    async create(colaborador) {
        return await this.colaboradorRepository.save(colaborador);
    }
    async update(colaborador) {
        if (!colaborador || colaborador.id <= 0)
            throw new common_1.HttpException('ID do colaborador é inválido', common_1.HttpStatus.BAD_REQUEST);
        await this.findById(colaborador.id);
        return this.colaboradorRepository.save(colaborador);
    }
    async delete(id) {
        await this.findById(id);
        return await this.colaboradorRepository.delete(id);
    }
};
exports.ColaboradorService = ColaboradorService;
exports.ColaboradorService = ColaboradorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(colaborador_entity_1.Colaborador)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ColaboradorService);
//# sourceMappingURL=colaborador.service.js.map