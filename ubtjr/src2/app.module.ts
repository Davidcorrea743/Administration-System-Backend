import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from 'src2/app.controller';
import { AppService } from 'src2/app.service';
import { AuthModule } from 'src2/auth/auth.module';
import { ModulesModule } from 'src2/modules/modules.module';
import { DatabaseModule } from 'src2/utils/database.module';
import config from 'src2/utils/config';

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
    ModulesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
