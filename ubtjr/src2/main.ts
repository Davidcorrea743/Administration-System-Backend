import { ClassSerializerInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';
import { AppModule } from 'src2/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const internalOptions = new DocumentBuilder()
    .setTitle('Backend Sistema Entrega Project')
    .setDescription('')
    .setVersion('2.0')
    .setContact('Gabriel Chaparro', '', 'gabrielchaparro.asesor@gmail.com')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, internalOptions);

  const theme = new SwaggerTheme();
  const options = {
    explorer: false,
    customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK),
  };
  SwaggerModule.setup('api/docs', app, document, options);
  const configService = app.get(ConfigService);

  // Lista de orígenes permitidos
  const allowedOrigins = [
    'https://e076-94-140-11-14.ngrok-free.app',
    'https://adac-185-203-218-47.ngrok-free.app',
    'https://5430-94-140-11-14.ngrok-free.app', // Agrega más orígenes si es necesario
    'http://localhost:5173',
  ];

  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Origen no permitido por CORS: ${origin}`));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    credentials: true, // Permite el envío de cookies o autenticación
  });

  await app.listen(configService.get('PORT'));
}
bootstrap();
