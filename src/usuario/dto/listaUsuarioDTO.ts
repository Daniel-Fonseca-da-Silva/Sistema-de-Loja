import { IsEmail, IsNotEmpty, isNotEmpty, MinLength, minLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validador";

export class ListaUsuarioDTO {

    constructor(
        readonly id: string,
        readonly nome: string,
    ){}
}
