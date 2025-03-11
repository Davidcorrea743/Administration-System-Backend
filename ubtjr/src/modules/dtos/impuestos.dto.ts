import {
  IsOptional,
  IsNumber,
  IsDecimal,
  IsDateString,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { ImpuestosTipoEnum } from 'src/entities/impuestos.entity';

export class CreateImpuestosDto {
  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDateString()
  fecha?: Date;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsNumber()
  noFactura?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  montoPagar?: number;

  @ApiProperty({
    nullable: false,
    enum: ImpuestosTipoEnum,
    enumName: 'ImpuestosTipoEnum',
    description:
      'Tipo de Impuestos. Opciones disponibles: ' +
      `${Object.values(ImpuestosTipoEnum).join(', ')}`,
  })
  @IsNotEmpty()
  @IsEnum(ImpuestosTipoEnum)
  tipo: ImpuestosTipoEnum.IVA;
}

export class UpdateImpuestosDto extends CreateImpuestosDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
