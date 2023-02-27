import { Controller, Get } from "@nestjs/common/decorators";

@Controller("/users")
export class UserController {
  @Get()
  getuser() {
    return {
      status: true,
      message: "user data found",
    };
  }
}
