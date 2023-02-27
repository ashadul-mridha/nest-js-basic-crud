import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./login.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("/login")
  login(@Body() body: LoginDto) {
    return this.authService.validateUser(body.email, body.password);
  }
}
