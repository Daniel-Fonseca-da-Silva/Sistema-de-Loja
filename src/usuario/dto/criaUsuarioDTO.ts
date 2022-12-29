import { IsEmail, IsNotEmpty, isNotEmpty, MinLength, minLength } from "class-validator";

export class CriaUsuarioDTO {

    @IsNotEmpty({
        message: "Não é permitido valor nulo ou vazio"
    })
    nome: string;

    @IsEmail(undefined, {
        message: "Email informado é invalido"
    })
    email: string;

    @MinLength(6, {
        message: "A senha precisa de no minimo 6 caracteres"
    })
    senha: string;
}
