import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsOptional, IsDateString, IsEnum, IsString, IsNotEmpty, IsNumber } from 'class-validator';

import { SeniatTipoEnum } from 'src/entities/seniat.entity';

export class CreateSeniatDto {
  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDateString()
  fecha?: Date;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsString()
  periodoPagar?: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  montoPagar?: number;

  @ApiProperty({ nullable: true, enum: SeniatTipoEnum })
  @IsOptional()
  @IsEnum(SeniatTipoEnum)
  tipo?: SeniatTipoEnum.IVA;
}

export class UpdateSeniatDto extends CreateSeniatDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
