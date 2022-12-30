import { IsEmail, IsNotEmpty, isNotEmpty, IsOptional, MinLength, minLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validador";

export class AtualizaUsuarioDTO {

    @IsNotEmpty({
        message: "Não é permitido valor nulo ou vazio"
    })
    @IsOptional()
    nome: string;

    @IsEmail(undefined, {
        message: "Email informado é invalido"
    })
    @EmailEhUnico({ message: "Email já existente, verifique" })
    @IsOptional()
    email: string;

    @MinLength(6, {
        message: "A senha precisa de no minimo 6 caracteres"
    })
    @IsOptional()
    senha: string;
}
