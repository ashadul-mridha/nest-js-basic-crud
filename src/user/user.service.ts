import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserDto } from "./user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async get() {
    const data = await this.userRepository.find();
    return {
      status: true,
      data,
      message: "User Found"
    };
  }

  create(data: UserDto) {
    this.userRepository.save(data);
    return {
      status: true,
      data,
      message: "User Service Create"
    };
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    return {
      status: true,
      user,
      message: "User Service find one"
    };
  }

  async update(id: number, data: UserDto) {
    const userData = await this.userRepository.update(id, data);
    return {
      status: true,
      userData,
      message: "User Service updated"
    };
  }
  async delete(id: number) {
    const deleted = await this.userRepository.delete(id);
    return {
      status: true,
      deleted,
      message: "User Service Added"
    };
  }
}
