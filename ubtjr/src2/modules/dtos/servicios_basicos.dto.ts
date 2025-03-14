import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDecimal,
  IsOptional,
  IsDateString,
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  Min,
} from 'class-validator';
import { MesesEnum } from 'src2/entities/condominio.entity';
import { ServiciosEnum } from 'src2/entities/servicios_basicos';

export class CreateServicioBasicoDto {
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
  noOficina?: string;

  @ApiProperty({ nullable: false })
  @IsDecimal()
  @IsNotEmpty()
  @Min(0, { message: 'Monto a pagar no puede ser negativo' })
  montoPagar: number;

  @ApiProperty({ nullable: false })
  @IsDecimal()
  @IsNotEmpty()
  @Min(0, { message: 'IVA no puede ser negativo' })
  iva: number;

  @ApiProperty({
    nullable: false,
    enum: ServiciosEnum,
    enumName: 'ServiciosEnum',
    description:
      'Servicios. Opciones disponibles: ' +
      `${Object.values(ServiciosEnum).join(', ')}`,
  })
  @IsNotEmpty()
  @IsEnum(ServiciosEnum)
  serviciosBasicos: ServiciosEnum;

  @ApiProperty({ nullable: false })
  @IsString()
  @IsNotEmpty()
  contratoControlTelefono: string;
}

export class UpdateServicioBasicoDto extends CreateServicioBasicoDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
