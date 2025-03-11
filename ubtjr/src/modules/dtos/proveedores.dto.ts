import {
  IsString,
  IsOptional,
  IsNumber,
  IsDecimal,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export interface FacturaProveedorDto {
  id: number;
  rif: number;
  nombreProveedor: string;
  nombre: string;
  noFactura: number;
  fecha: Date;
  fecha_vencimiento: Date;
  sub_total: number;
  base: number;
  iva: number;
  porcentajeIva: number;
  total: number;
  retieneIva: boolean;
  retencionIva: number;
  retieneIslr: boolean;
  retencionIslr: number;
  retiene1xMil: boolean;
  retencion1xMil: number;
  retiene115: boolean;
  retencion115: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export class CreateProveedorDto {
  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDateString()
  fechaVencimientoRif?: Date;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsString()
  razonSocial?: string;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsString()
  tipoRif?: string;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsNumber()
  rif?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsString()
  noOficina?: string;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  direccion?: string;

  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  porcentaje_retencion: number;
}

export class UpdateProveedorDto extends CreateProveedorDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
