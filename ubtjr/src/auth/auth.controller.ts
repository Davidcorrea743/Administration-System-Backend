import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  HttpCode,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import {
  ApiKeyDto,
  ChangePasswordDto,
  CreateUserDto,
  LoginDto,
} from 'src/auth/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() payload: LoginDto) {
    return this.authService.login(payload);
  }

  @ApiBearerAuth()
  @Post('change-password')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async changePassword(@Request() req, @Body() query: ChangePasswordDto) {
    const userId = req.user.sub;
    return this.authService.changePassword(userId, query);
  }

  @ApiBearerAuth()
  @Post('create')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiResponse({ status: 201, description: 'Usuario creado exitosamente.' })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login-admin')
  @HttpCode(200)
  @ApiResponse({ status: 200, description: 'Login exitoso como admin.' })
  loginAdmin(@Body() apiKey: ApiKeyDto) {
    return this.authService.loginAdmin(apiKey);
  }
}
