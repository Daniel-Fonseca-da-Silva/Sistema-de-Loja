import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/criaUsuarioDTO';

@Controller('/usuarios')
export class UsuarioController {

    constructor(private repository: UsuarioRepository) {}

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
        this.repository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    }

    @Get()
    async listarUsuarios() {
        return this.repository.listarUsuarios();
    }
}
