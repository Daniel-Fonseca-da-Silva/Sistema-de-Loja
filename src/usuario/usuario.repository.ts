import { Injectable } from "@nestjs/common";

@Injectable() // Provider!
export class UsuarioRepository{
    private usuarios = [];

    async salvar(usuario) {
        this.usuarios.push(usuario);
    }

    listarUsuarios() {
        return this.usuarios;
    }
}