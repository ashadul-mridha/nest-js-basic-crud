import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);
    if (user) {
      if (user.password === password) {
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
