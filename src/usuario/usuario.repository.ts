import { Injectable } from "@nestjs/common";

@Injectable() // Provider!
export class UsuarioRepository{
    private usuarios = [];

    async salvar(usuario) {
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
}