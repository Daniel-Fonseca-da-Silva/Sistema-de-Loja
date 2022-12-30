import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller'
import { UsuarioRepository } from './usuario.repository';
import { EmailEhUnicoValidator } from './validacao/email-eh-unico.validador';

@Module({
    imports: [],
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailEhUnicoValidator],
})
export class UsuarioModule {}
