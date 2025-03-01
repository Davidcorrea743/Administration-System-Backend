import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CreateSeniatDto, UpdateSeniatDto } from 'src/modules/dtos/seniat.dto';
import { SeniatService } from 'src/modules/services/seniat.service';

@ApiBearerAuth()
@ApiTags('Seniat')
@Controller('seniat')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SeniatController {
  constructor(private readonly seniatService: SeniatService) {}

  @Get()
  async getAllSeniat() {
    return this.seniatService.findAll();
  }

  @Get(':id')
  async getSeniat(@Param('id') id: number) {
    return this.seniatService.findOne(id);
  }

  @Post()
  async createSeniat(@Body() createSeniatDto: CreateSeniatDto) {
    return this.seniatService.create(createSeniatDto);
  }

  @Put(':id')
  async updateSeniat(
    @Param('id') id: number,
    @Body() updateSeniatDto: UpdateSeniatDto,
  ) {
    return this.seniatService.update(id, updateSeniatDto);
  }

  @Delete(':id')
  async deleteSeniat(@Param('id') id: number) {
    return this.seniatService.delete(id);
  }
}
