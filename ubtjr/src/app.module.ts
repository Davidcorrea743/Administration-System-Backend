import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { AuthModule } from 'src/auth/auth.module';
import { ModulesModule } from 'src/modules/modules.module';
import { DatabaseModule } from 'src/utils/database.module';
import config from 'src/utils/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_URL: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
    }),
    AuthModule,
    DatabaseModule,
    ModulesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
