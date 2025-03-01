import { IsString, IsOptional, IsNumber, IsDateString, IsBoolean, IsDecimal, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFacturasPDto {
  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsString()
  tipoRif?: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsNumber()
  rifProveedor?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsNumber()
  noFactura?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDateString()
  fecha?: Date;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  base?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  iva?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  total?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsBoolean()
  retieneIva?: boolean;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  retencionIva?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsBoolean()
  retieneIslr?: boolean;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  retencionIslr?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsBoolean()
  retiene1xMil?: boolean;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  retencion1xMil?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsBoolean()
  retiene115?: boolean;

  @ApiProperty({ nullable: true })
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
