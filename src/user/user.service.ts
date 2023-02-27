import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  get() {
    return {
      status: true,
      message: "User Service Added"
    };
  }
}
