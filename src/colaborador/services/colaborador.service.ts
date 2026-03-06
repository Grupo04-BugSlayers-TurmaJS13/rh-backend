import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Colaborador } from "../entities/colaborador.entity";
import { Like, Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";

@Injectable()
export class ColaboradorService {

    constructor(@InjectRepository(Colaborador)
    private colaboradorRepository: Repository<Colaborador>) { }

    async findAll(): Promise<Colaborador[]> {
        return this.colaboradorRepository.find()
    }

    async findById(id:number):Promise<Colaborador>{
        
        const colaborador = await this.colaboradorRepository.findOne({where:{id}});
        
        if(!colaborador)
            throw new HttpException('Colaborador não encontrado', HttpStatus.NOT_FOUND);
        
        
        return colaborador;

    }



      async findByNome(nome:string):Promise<Colaborador[]>{
        
        return this.colaboradorRepository.find({
            where:{
            nome: Like( `%${nome}%` )}
        });;

    }

    async create(colaborador:Colaborador):Promise<Colaborador>{
        return await this.colaboradorRepository.save(colaborador)
    }


    async update(colaborador:Colaborador):Promise<Colaborador>{
        if(!colaborador || colaborador.id <=0)
           throw new HttpException('ID do colaborador é inválido', HttpStatus.BAD_REQUEST);

        await this.findById(colaborador.id);
        return  this.colaboradorRepository.save(colaborador)
    }



    async delete(id:number):Promise<DeleteResult>{
        
        
        await this.findById(id);

        return await this.colaboradorRepository.delete(id)
    }






}