import { IsEmail, IsInt, IsString, Max, MaxLength, Min, MinLength, ValidateNested } from "class-validator";
import { LocationModel } from "./location.model";

class UserModel {
  @IsString()
  @MinLength(10)
  @MaxLength(20)
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(18)
  @Max(40)
  age: number;

  @ValidateNested()
  location: LocationModel;

  constructor(body: any) {
    Object.assign(this, body);
    this.location = new LocationModel(body.location);
  }
}

export {UserModel};