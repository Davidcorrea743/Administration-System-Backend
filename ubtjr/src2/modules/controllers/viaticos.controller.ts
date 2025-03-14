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
  CreateViaticosDto,
  UpdateViaticosDto,
} from 'src2/modules/dtos/viaticos.dto';
import { ViaticosService } from 'src2/modules/services/viaticos.service';

@ApiBearerAuth()
@ApiTags('Viaticos')
@Controller('viaticos')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ViaticosController {
  constructor(private readonly viaticosService: ViaticosService) {}

  @Get()
  async getAllViaticos() {
    return this.viaticosService.findAll();
  }

  @Get(':id')
  async getViaticos(@Param('id') id: number) {
    return this.viaticosService.findOne(id);
  }

  @Post()
  async createViaticos(@Body() createViaticosDto: CreateViaticosDto) {
    return this.viaticosService.create(createViaticosDto);
  }

  @Put(':id')
  async updateViaticos(
    @Param('id') id: number,
    @Body() updateViaticosDto: UpdateViaticosDto,
  ) {
    return this.viaticosService.update(id, updateViaticosDto);
  }

  @Delete(':id')
  async deleteViaticos(@Param('id') id: number) {
    return this.viaticosService.delete(id);
  }
}
