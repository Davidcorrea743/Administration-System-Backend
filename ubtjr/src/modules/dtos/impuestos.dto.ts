import {
  IsOptional,
  IsNumber,
  IsDecimal,
  IsDateString,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { ImpuestosTipoEnum } from 'src/entities/impuestos.entity';

export class CreateImpuestosDto {
  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDateString()
  fecha?: Date;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsNumber()
  noFactura?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  montoPagar?: number;

  @ApiProperty({ nullable: true, enum: ImpuestosTipoEnum })
  @IsEnum(ImpuestosTipoEnum)
  tipo?: ImpuestosTipoEnum.UNOMIL;
}

export class UpdateImpuestosDto extends CreateImpuestosDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
