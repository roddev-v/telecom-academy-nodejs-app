import { IsIn } from "class-validator";

export class LocationModel {
    @IsIn(['Bucharest', 'Cluj', 'Paris', 'London', 'Liverpool'])
    city: string;

    @IsIn(['Romania', 'France', 'UK'])
    country: string;

    constructor(location: any) {
      Object.assign(this, location);
    }
}