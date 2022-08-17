import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import process from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "Komal",
     // database: process.env.POSTGRES_NAME,
       database: "employee",
      autoLoadEntities:true,
      synchronize: true
    }),
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
