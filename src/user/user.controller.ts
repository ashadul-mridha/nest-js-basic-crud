import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from "@nestjs/common/decorators";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller("/users")
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getuser() {
    return this.userService.get();
  }

  @Post()
  store(@Body() body: UserDto) {
    return this.userService.create(body);
  }

  @Get("/:id")
  getSingle(@Param("id") id: number) {
    return this.userService.findOne(id);
  }

  @Patch("/:id")
  updateUser(@Param("id") id: number, @Body() body: UserDto) {
    return this.userService.update(id, body);
  }

  @Delete("/:id")
  DeleteUser(@Param("id") id: number) {
    return this.userService.delete(id);
  }
}
