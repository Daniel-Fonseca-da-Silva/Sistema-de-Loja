import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/criaUsuarioDTO';
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from "./dto/listaUsuarioDTO";
import { AtualizaUsuarioDTO } from "./dto/atualizaUsuarioDTO";

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
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message: 'Usuario Criado com sucesso'
        }
    }

    @Get()
    async listarUsuarios() {
        const usuariosSalvos = await this.repository.listarUsuarios();
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );

        return usuariosLista;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO) {
        const usuarioAtualizado = await this.repository.atualiza(id, novosDados);
        
        return {
            usuario: usuarioAtualizado, 
            message: 'Usuário atualizado com sucesso'
        }
    }
}
