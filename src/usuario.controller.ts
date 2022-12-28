import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController {

    private repository = new UsuarioRepository();

    @Post()
    async criaUsuario(@Body() dadosDoUsuario) {
        this.repository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    }

    @Get()
    async listarUsuarios() {
        return this.repository.listarUsuarios();
    }
}
