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
import { ServicioBasicoService } from 'src2/modules/services/servicios_basicos.service';
import {
  CreateServicioBasicoDto,
  UpdateServicioBasicoDto,
} from 'src2/modules/dtos/servicios_basicos.dto';

@ApiBearerAuth()
@ApiTags('Servicios Básicos')
@Controller('serv_basicos')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ServicioBasicoController {
  constructor(private readonly servicioBasicoService: ServicioBasicoService) {}

  @Get()
  async getAllServicioElecAseo() {
    return this.servicioBasicoService.findAll();
  }

  @Get(':id')
  async getServicioBasico(@Param('id') id: number) {
    return this.servicioBasicoService.findOne(id);
  }

  @Post()
  async createServicioElecAseo(
    @Body() createServicioBasicoDto: CreateServicioBasicoDto,
  ) {
    return this.servicioBasicoService.create(createServicioBasicoDto);
  }

  @Put(':id')
  async updateServicioBasico(
    @Param('id') id: number,
    @Body() updateServicioBasicoDto: UpdateServicioBasicoDto,
  ) {
    return this.servicioBasicoService.update(id, updateServicioBasicoDto);
  }

  @Delete(':id')
  async deleteServicioElecAseo(@Param('id') id: number) {
    return this.servicioBasicoService.delete(id);
  }
}
