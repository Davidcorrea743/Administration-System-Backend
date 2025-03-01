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
import {
  CreateServicioTelefDto,
  UpdateServicioTelefDto,
} from 'src/modules/dtos/servicio_telef.dto';
import { ServicioTelefService } from 'src/modules/services/servicio_telef.service';

@ApiBearerAuth()
@ApiTags('Servicio Telef')
@Controller('telef')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ServicioTelefController {
  constructor(private readonly servicioTelefService: ServicioTelefService) {}

  @Get()
  async getAllServicioTelef() {
    return this.servicioTelefService.findAll();
  }

  @Get(':id')
  async getServicioTelef(@Param('id') id: number) {
    return this.servicioTelefService.findOne(id);
  }

  @Post()
  async createServicioTelef(
    @Body() createServicioTelefDto: CreateServicioTelefDto,
  ) {
    return this.servicioTelefService.create(createServicioTelefDto);
  }

  @Put(':id')
  async updateServicioTelef(
    @Param('id') id: number,
    @Body() updateServicioTelefDto: UpdateServicioTelefDto,
  ) {
    return this.servicioTelefService.update(id, updateServicioTelefDto);
  }

  @Delete(':id')
  async deleteServicioTelef(@Param('id') id: number) {
    return this.servicioTelefService.delete(id);
  }
}
