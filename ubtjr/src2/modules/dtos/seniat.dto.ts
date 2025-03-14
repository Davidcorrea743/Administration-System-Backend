import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDecimal,
  IsOptional,
  IsDateString,
  IsEnum,
  IsString,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

import { SeniatTipoEnum } from 'src2/entities/seniat.entity';

export class CreateSeniatDto {
  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDateString()
  fecha?: Date;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsString()
  periodoPagar?: string;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  montoPagar?: number;

  @ApiProperty({
    nullable: false,
    enum: SeniatTipoEnum,
    enumName: 'SeniatTipoEnum',
    description:
      'Seniat Tipos. Opciones disponibles: ' +
      `${Object.values(SeniatTipoEnum).join(', ')}`,
  })
  @IsNotEmpty()
  @IsEnum(SeniatTipoEnum)
  tipo: SeniatTipoEnum;
}

export class UpdateSeniatDto extends CreateSeniatDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
