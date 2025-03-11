import { IsDecimal, IsOptional, IsDateString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateNominaDto {
  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDateString()
  fecha?: Date;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  sueldo?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  primas?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  complementos?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  asistenciaSE?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  aguinaldos?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  bonoVacacional?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  otrasSubvenciones?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  prestacionesSociales?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  retencionesIVSS?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  retencionSPF?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  retencionFAOV?: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDecimal()
  comisionesBancarias?: number;
}

export class UpdateNominaDto extends CreateNominaDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
