import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tb_colaboradores'})
export class Colaborador{

@PrimaryGeneratedColumn()
id:number;

@Transform(({value}:TransformFnParams)=>value?.trim())
@IsNotEmpty()
@Column({length : 100,nullable: false})
nome : string;


@IsNotEmpty()
@Column({ type: 'date', nullable: false})
dataNascimento : Date;

@Transform(({value}:TransformFnParams)=>value?.trim())
@IsNotEmpty()
@Column({length : 100,nullable: false})
cargo : string;


@IsNotEmpty()
@IsNumber({ maxDecimalPlaces: 2 }) // Garante que é um número com até 2 casas decimais
@IsPositive()
@Column({ type: 'decimal', precision: 10, scale: 2 })
salario: number;

@IsNotEmpty()
@Column({ type: 'date', nullable: false})
dataAdmissao : Date;
}