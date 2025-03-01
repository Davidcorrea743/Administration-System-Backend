import { IsDecimal, IsOptional, IsDateString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNominaDto {
  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDateString()
  fecha?: Date;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  sueldo?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  primas?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  complementos?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  asistenciaSE?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  aguinaldos?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  bonoVacacional?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  otrasSubvenciones?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  prestacionesSociales?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  retencionesIVSS?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  retencionSPF?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  retencionFAOV?: number;

  @ApiProperty({ nullable: true })
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
