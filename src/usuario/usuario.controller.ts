import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/criaUsuarioDTO';
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export class UsuarioController {

    constructor(private repository: UsuarioRepository) {}

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {

        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.id = uuid();

        this.repository.salvar(usuarioEntity);
        return { 
            id: usuarioEntity.id, message: 'Usuario criado com sucesso' 
        }
    }

    @Get()
    async listarUsuarios() {
        return this.repository.listarUsuarios();
    }
}
