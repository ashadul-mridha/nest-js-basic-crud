import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.01",
      port: 3306,
      username: "root",
      password: "",
      database: "nest_crud",
      entities: [],
      synchronize: true
    })
  ]
})
export class AppModule {}
