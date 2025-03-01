import { ClassSerializerInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';

import { AppModule } from 'src/app.module';

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
  app.enableCors();

  await app.listen(configService.get('PORT'));
}
bootstrap();
