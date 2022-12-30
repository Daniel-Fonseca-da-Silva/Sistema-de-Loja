import { Injectable } from "@nestjs/common";
import { AtualizaUsuarioDTO } from "./dto/atualizaUsuarioDTO";
import { UsuarioEntity } from "./usuario.entity";

@Injectable() // Provider!
export class UsuarioRepository{
    private usuarios: UsuarioEntity[] = [];

    async salvar(usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
    }

    async listarUsuarios() {
        return this.usuarios;
    }

    async existeComEmail(email: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );
        return possivelUsuario !== undefined;
    }

    async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
        const possivelUsuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        );

        if(!possivelUsuario) {
            throw new Error('Usuário não existe');
        }

        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if(chave === 'id') {
                return;
            }
            possivelUsuario[chave] = valor;
        });
        return possivelUsuario;
    }

}