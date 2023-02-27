import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  get() {
    return {
      status: true,
      message: "User Service Added"
    };
  }

  create() {
    return {
      status: true,
      message: "User Service Create"
    };
  }

  findOne() {
    return {
      status: true,
      message: "User Service find one"
    };
  }

  update() {
    return {
      status: true,
      message: "User Service Added"
    };
  }
  delete() {
    return {
      status: true,
      message: "User Service Added"
    };
  }
}
