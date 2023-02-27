import { Controller, Get } from "@nestjs/common/decorators";
import { UserService } from "./user.service";

@Controller("/users")
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getuser() {
    return this.userService.get();
  }
}
