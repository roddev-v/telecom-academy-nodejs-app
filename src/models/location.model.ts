import { IsIn } from "class-validator";

export class LocationModel {
  @IsIn(["Bucharest", "Cluj", "Paris", "London", "Liverpool"], {
    message: "Invalid city",
  })
  city: string;

  @IsIn(["Romania", "France", "UK"], {
    message: "Invalid country",
  })
  country: string;

  constructor(location: any) {
    Object.assign(this, location);
  }
}
