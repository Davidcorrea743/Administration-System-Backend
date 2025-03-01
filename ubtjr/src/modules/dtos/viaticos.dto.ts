import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateViaticosDto {
  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsDateString()
  fecha?: Date;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsInt()
  cedula: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsString()
  cargo?: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsString()
  concepto?: string;
}

export class UpdateViaticosDto extends CreateViaticosDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
