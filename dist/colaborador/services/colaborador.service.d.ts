import { Colaborador } from "../entities/colaborador.entity";
import { Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";
export declare class ColaboradorService {
    private colaboradorRepository;
    constructor(colaboradorRepository: Repository<Colaborador>);
    findAll(): Promise<Colaborador[]>;
    findById(id: number): Promise<Colaborador>;
    findByNome(nome: string): Promise<Colaborador[]>;
    create(colaborador: Colaborador): Promise<Colaborador>;
    update(colaborador: Colaborador): Promise<Colaborador>;
    delete(id: number): Promise<DeleteResult>;
}
