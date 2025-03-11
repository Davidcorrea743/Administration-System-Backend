import {
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
  IsBoolean,
  IsDecimal,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateFacturasPDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  rif: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsNumber()
  noFactura?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDateString()
  fecha?: Date;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDateString()
  fecha_vencimiento?: Date;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  sub_total?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  base?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  iva?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  porcentajeIva?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  total?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsBoolean()
  retieneIva?: boolean;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  retencionIva?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsBoolean()
  retieneIslr?: boolean;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  retencionIslr?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsBoolean()
  retiene1xMil?: boolean;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  retencion1xMil?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsBoolean()
  retiene115?: boolean;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  retencion115?: number;
}

export class UpdateFacturasPDto extends CreateFacturasPDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
