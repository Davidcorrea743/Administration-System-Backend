import { IsString, IsOptional, IsNumber, IsDecimal, IsDateString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCondominioDto {
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
  nombre?: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsNumber()
  rifCondominio?: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsString()
  noOficina?: string;

  @ApiProperty({ nullable: true })
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
