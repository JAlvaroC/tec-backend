import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT ?? 3004);

  const config = new DocumentBuilder()
  .setTitle('Tec RestFull API')
  .setDescription('The tec endpoitns')
  .setVersion('1.0')
  // .addTag('cats')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
// await app.listen(process.env.PORT);
await app.listen(process.env.PORT ?? 3005);
console.log(`🚀 App corriendo en: http://localhost:3005`);
console.log(`📚 Swagger en: http://localhost:3005/api`);
}
bootstrap();
