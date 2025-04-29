import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para o front em localhost:4200
  app.enableCors({ origin: 'http://localhost:4200' });

  // Validação automática de DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // remove propriedades não declaradas no DTO
      forbidNonWhitelisted: true, // retorna erro se receber campos extras
      transform: true             // converte payload em instância de DTO
    })
  );

  await app.listen(3000);
  console.log('🚀 Backend rodando em http://localhost:3000');
}

bootstrap();
