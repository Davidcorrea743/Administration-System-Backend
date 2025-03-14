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
import { CreateNominaDto, UpdateNominaDto } from 'src2/modules/dtos/nomina.dto';
import { NominaService } from 'src2/modules/services/nomina.service';

@ApiBearerAuth()
@ApiTags('Nomina')
@Controller('nomina')
@UseGuards(JwtAuthGuard, RolesGuard)
export class NominaController {
  constructor(private readonly nominaService: NominaService) {}

  @Get()
  async getAllNominas() {
    return this.nominaService.findAll();
  }

  @Get(':id')
  async getNomina(@Param('id') id: number) {
    return this.nominaService.findOne(id);
  }

  @Post()
  async createNomina(@Body() createNominaDto: CreateNominaDto) {
    return this.nominaService.create(createNominaDto);
  }

  @Put(':id')
  async updateNomina(
    @Param('id') id: number,
    @Body() updateNominaDto: UpdateNominaDto,
  ) {
    return this.nominaService.update(id, updateNominaDto);
  }

  @Delete(':id')
  async deleteNomina(@Param('id') id: number) {
    return this.nominaService.delete(id);
  }
}
