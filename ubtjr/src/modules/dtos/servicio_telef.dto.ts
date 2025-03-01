import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsOptional, IsDateString, IsString, IsInt, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateServicioTelefDto {
  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDateString()
  fecha?: Date;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsString()
  mesPagar?: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsInt()
  rif?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  montoPagar?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsString()
  noOficina?: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsString()
  noLinea?: string;
}

export class UpdateServicioTelefDto extends CreateServicioTelefDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
