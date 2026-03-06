import { ColaboradorService } from "../services/colaborador.service";
import { Colaborador } from "../entities/colaborador.entity";
export declare class ColaboradorController {
    private readonly colaboradorService;
    constructor(colaboradorService: ColaboradorService);
    findAll(): Promise<Colaborador[]>;
    findById(id: number): Promise<Colaborador>;
    findByNome(nome: string): Promise<Colaborador[]>;
    create(colaborador: Colaborador): Promise<Colaborador>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(colaborador: Colaborador): Promise<Colaborador>;
}
