import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class UserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
