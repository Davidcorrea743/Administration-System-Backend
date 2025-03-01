import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from 'src/entities/user.entity';

import { ApiKeyDto, ChangePasswordDto, CreateUserDto, LoginDto } from 'src/auth/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  private async findByEmail(email: string): Promise<User> {
    const user = await this.userRepo.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException(`User with ID ${email} not found`);
    }
    return user;
  }

  async login(query: LoginDto) {
    const user = await this.findByEmail(query.email);
    if (!user || !(await bcrypt.compare(query.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
      expiresIn: this.configService.get('JWT_EXPIRATION_TIME'),
      exp: new Date(
        new Date().getTime() +
          parseInt(this.configService.get('JWT_EXPIRATION_TIME')),
      ),
    };
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  private async updatePassword(id: number, newPassword: string) {
    const user: User = await this.findOne(id);
    if (user) user.password = newPassword;
    return user;
  }

  async changePassword(
    userId: number,
    query: ChangePasswordDto
  ) {
    const user = await this.findOne(userId);
    if (!user || !(await bcrypt.compare(query.currentPassword, user.password))) {
      throw new UnauthorizedException('Invalid current password');
    }

    const hashedPassword = await bcrypt.hash(query.newPassword, 10);
    await this.updatePassword(userId, hashedPassword);
    return { message: 'Password updated successfully' };
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, phoneNumber, password, role, status } = createUserDto;

    const existingUser = await this.userRepo.findOne({
      where: [{ email }, { phoneNumber }],
    });
    if (existingUser) {
      throw new ConflictException(
        'El usuario con ese correo o número de teléfono ya existe.',
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.userRepo.create({
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      status,
    });

    return this.userRepo.save(user);
  }

  async loginAdmin(query: ApiKeyDto) {
    if (query.apiKey !== this.configService.get('JWT_MODULE_KEY')) {
      throw new UnauthorizedException('Token Invalido.');
    }
    const payload = { sub: 1, email: 'admin@ubtjr.com', role: 'admin' };
    return {
      accessToken: this.jwtService.sign(payload),
      expiresIn: this.configService.get('JWT_EXPIRATION_TIME'),
      exp: new Date(
        new Date().getTime() +
          parseInt(this.configService.get('JWT_EXPIRATION_TIME')),
      ),
    };

  }
}
