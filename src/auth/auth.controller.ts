import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { LoginDto } from "./login.dto";

@Controller("auth")
export class AuthController {
  constructor(private userService: UserService) {}
  @Post("/login")
  async login(@Body() body: LoginDto) {
    const user = await this.userService.findOneByEmail(body.email);
    if (user) {
      if (user.password === body.password) {
        return "User Login Successfull";
      } else {
        throw new UnauthorizedException("Pass Not Match", {
          cause: new Error(),
          description: "Some error happend"
        });
      }
    } else {
      throw new UnauthorizedException("Email Not Match", {
        cause: new Error(),
        description: "Some error happend"
      });
    }
  }
}
