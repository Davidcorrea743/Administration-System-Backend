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
import { ServicioElecAseoService } from 'src/modules/services/servicio_elec_aseo.service';
import {
  CreateServicioElecAseoDto,
  UpdateServicioElecAseoDto,
} from 'src/modules/dtos/servicio_elec_aseo.dto';

@ApiBearerAuth()
@ApiTags('Elec & Aseo')
@Controller('elec_aseo')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ServicioElecAseoController {
  constructor(
    private readonly servicioElecAseoService: ServicioElecAseoService,
  ) {}

  @Get()
  async getAllServicioElecAseo() {
    return this.servicioElecAseoService.findAll();
  }

  @Get(':id')
  async getServicioElecAseo(@Param('id') id: number) {
    return this.servicioElecAseoService.findOne(id);
  }

  @Post()
  async createServicioElecAseo(
    @Body() createServicioElecAseoDto: CreateServicioElecAseoDto,
  ) {
    return this.servicioElecAseoService.create(createServicioElecAseoDto);
  }

  @Put(':id')
  async updateServicioElecAseo(
    @Param('id') id: number,
    @Body() updateServicioElecAseoDto: UpdateServicioElecAseoDto,
  ) {
    return this.servicioElecAseoService.update(id, updateServicioElecAseoDto);
  }

  @Delete(':id')
  async deleteServicioElecAseo(@Param('id') id: number) {
    return this.servicioElecAseoService.delete(id);
  }
}
