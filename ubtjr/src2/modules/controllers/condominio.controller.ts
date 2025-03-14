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

import { JwtAuthGuard } from 'src2/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src2/auth/guards/roles.guard';
import {
  CreateCondominioDto,
  UpdateCondominioDto,
} from 'src2/modules/dtos/condominio.dto';
import { CondominioService } from 'src2/modules/services/condominio.service';

@ApiBearerAuth()
@ApiTags('Condominio')
@Controller('Condominio')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CondominioController {
  constructor(private readonly condominioService: CondominioService) {}

  // Condominio Endpoints

  @Get('')
  async getAllCondominios() {
    return this.condominioService.findAll();
  }

  @Get(':id')
  async getCondominio(@Param('id') id: number) {
    return this.condominioService.findOne(id);
  }

  @Post('')
  async createCondominio(@Body() createCondominioDto: CreateCondominioDto) {
    return this.condominioService.create(createCondominioDto);
  }

  @Put(':id')
  async updateCondominio(
    @Param('id') id: number,
    @Body() updateCondominioDto: UpdateCondominioDto,
  ) {
    return this.condominioService.update(id, updateCondominioDto);
  }

  @Delete(':id')
  async deleteCondominio(@Param('id') id: number) {
    return this.condominioService.delete(id);
  }
}
