import { IsInt, IsUrl, Length, Min } from "class-validator";
import { strict } from "node:assert";

export class CrearEditarBaseDTO {
    @Length(3, 500)
    nombre: string;

    @IsInt()
    @Min(0)
    valor: number;

    @IsUrl()
    imageUrl: string;

}