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

import { ImpuestosService } from 'src/modules/services/impuestos.service';

import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import {
  CreateImpuestosDto,
  UpdateImpuestosDto,
} from 'src/modules/dtos/impuestos.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Impuestos')
@Controller('Impuestos')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ImpuestosController {
  constructor(
    private readonly impuestosService: ImpuestosService,
  ) {}

  @Get()
  async getAllImpuestos() {
    return this.impuestosService.findAll();
  }

  @Get(':id')
  async getImpuesto(@Param('id') id: number) {
    return this.impuestosService.findOne(id);
  }

  @Post('')
  async createImpuesto(@Body() createImpuestosDto: CreateImpuestosDto) {
    return this.impuestosService.create(createImpuestosDto);
  }

  @Put(':id')
  async updateImpuesto(
    @Param('id') id: number,
    @Body() updateImpuestosDto: UpdateImpuestosDto,
  ) {
    return this.impuestosService.update(id, updateImpuestosDto);
  }

  @Delete(':id')
  async deleteImpuesto(@Param('id') id: number) {
    return this.impuestosService.delete(id);
  }
}
