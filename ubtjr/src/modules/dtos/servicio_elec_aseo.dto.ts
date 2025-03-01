import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsOptional, IsDateString, IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateServicioElecAseoDto {
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
  @IsString()
  noOficina?: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDecimal()
  montoPagar: number;
}

export class UpdateServicioElecAseoDto extends CreateServicioElecAseoDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
