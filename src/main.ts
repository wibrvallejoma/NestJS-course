import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove undefined attributes from the dtos.
      forbidNonWhitelisted: true, // Throw invalid attribute exception.
    }),
  );
  await app.listen(3000);
}
bootstrap();
