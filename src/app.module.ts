import { UsuarioModule } from './usuario/usuario.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
