import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsString, IsPhoneNumber, IsNotEmpty } from 'class-validator';
import { RoleStatusEnum, UserStatusEnum } from 'src/entities/user.entity';

export class LoginDto {
  @ApiProperty({ description: 'Email del usuario' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Contraseña del usuario', writeOnly: true })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class ChangePasswordDto {
  @ApiProperty({ description: 'Contraseña del usuario', writeOnly: true })
  @IsNotEmpty()
  @IsString()
  currentPassword: string;

  @ApiProperty({ description: 'Contraseña del usuario', writeOnly: true })
  @IsNotEmpty()
  @IsString()
  newPassword: string;
}

export class CreateUserDto {
  @ApiProperty({ description: 'Email del usuario' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Número de teléfono del usuario' })
  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber: string;

  @ApiProperty({ description: 'Contraseña del usuario', writeOnly: true })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ description: 'Rol del usuario', enum: RoleStatusEnum })
  @IsEnum(RoleStatusEnum)
  @IsNotEmpty()
  role: RoleStatusEnum;

  @ApiProperty({
    description: 'Estado del usuario',
    enum: UserStatusEnum,
    default: UserStatusEnum.active,
  })
  @IsEnum(UserStatusEnum)
  @IsNotEmpty()
  status: UserStatusEnum;
}

export class ApiKeyDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  apiKey: string;
}