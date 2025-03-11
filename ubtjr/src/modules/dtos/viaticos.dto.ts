import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsEnum,
} from 'class-validator';

import { EstadosTipoEnum } from 'src/entities/viaticos.entity';

export class CreateViaticosDto {
  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDateString()
  fecha?: Date;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsInt()
  cedula: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsString()
  cargo?: string;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsString()
  concepto?: string;

  @ApiProperty({
    nullable: false,
    enum: EstadosTipoEnum,
    enumName: 'EstadosTipoEnum',
    description:
      'Estado asociado. Opciones disponibles: ' +
      `${Object.values(EstadosTipoEnum).join(', ')}`,
  })
  @IsEnum(EstadosTipoEnum)
  estado: EstadosTipoEnum;
}

export class UpdateViaticosDto extends CreateViaticosDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
