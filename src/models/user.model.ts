import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

class UserModel {
  @IsString()
  @MinLength(10)
  @MaxLength(20)
  name: string;

  @IsEmail()
  email: string;

  constructor(n: string, e: string) {
    this.email = e;
    this.name = n;
  }
}

export {UserModel};