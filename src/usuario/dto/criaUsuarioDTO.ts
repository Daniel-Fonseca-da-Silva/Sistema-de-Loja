import { IsEmail, IsNotEmpty, isNotEmpty, MinLength, minLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validador";

export class CriaUsuarioDTO {

    @IsNotEmpty({
        message: "Não é permitido valor nulo ou vazio"
    })
    nome: string;

    @IsEmail(undefined, {
        message: "Email informado é invalido"
    })
    @EmailEhUnico({ message: "Email já existente, verifique" })
    email: string;

    @MinLength(6, {
        message: "A senha precisa de no minimo 6 caracteres"
    })
    senha: string;
}
