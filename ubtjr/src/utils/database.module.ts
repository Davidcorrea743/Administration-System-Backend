import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from 'src/utils/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: () => {
        return {
          type: 'postgres',
          url: process.env.POSTGRES_URL,
          synchronize: true,
          // synchronize: false,
          // logging: ['error', 'query'],
          logging: ['error'],
          autoLoadEntities: true,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
