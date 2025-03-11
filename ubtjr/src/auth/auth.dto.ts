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

  @ApiProperty({
    nullable: false,
    enum: RoleStatusEnum,
    enumName: 'RoleStatusEnum',
    description:
      'Rol del usuario. Opciones disponibles: ' +
      `${Object.values(RoleStatusEnum).join(', ')}`,
  })
  @IsEnum(RoleStatusEnum)
  @IsNotEmpty()
  role: RoleStatusEnum;

  @ApiProperty({
    nullable: false,
    enum: UserStatusEnum,
    enumName: 'UserStatusEnum',
    description:
      'Estado del usuario. Opciones disponibles: ' +
      `${Object.values(UserStatusEnum).join(', ')}`,
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