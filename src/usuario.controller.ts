import { Body, Controller, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController {

    private repository = new UsuarioRepository();

    @Post()
    async criaUsuario(@Body() dadosDoUsuario) {
        this.repository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    }
}
