import {
  IsString,
  IsOptional,
  IsNumber,
  IsDecimal,
  IsDateString,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { MesesEnum } from 'src/entities/condominio.entity';

export class CreateCondominioDto {
  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDateString()
  fecha?: Date;

  @ApiProperty({
    nullable: false,
    enum: MesesEnum,
    enumName: 'MesesEnum',
    description:
      'Mes a pagar. Opciones disponibles: ' +
      `${Object.values(MesesEnum).join(', ')}`,
  })
  @IsNotEmpty()
  @IsEnum(MesesEnum)
  mesPagar: MesesEnum;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsNumber()
  rifCondominio?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsString()
  noOficina?: string;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  montoPagar?: number;
}

export class UpdateCondominioDto extends CreateCondominioDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
