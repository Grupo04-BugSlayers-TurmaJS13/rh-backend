import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colaborador } from './colaborador/entities/colaborador.entity';
import { ColaboradorModule } from './colaborador/colaborador.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1306',
      database: 'db_RHmanager',
      entities: [Colaborador],
      synchronize: true,
     
  }),ColaboradorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
