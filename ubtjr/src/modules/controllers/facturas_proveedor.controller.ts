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
import { FacturasPService } from 'src/modules/services/facturas_proveedor.service';
import {
  CreateFacturasPDto,
} from 'src/modules/dtos/facturas_proveedor.dto';

import { FacturaProveedorDto } from 'src/modules/dtos/proveedores.dto';

@ApiBearerAuth()
@ApiTags('Facturas')
@Controller('facturas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class FacturasPController {
  constructor(private readonly facturasPService: FacturasPService) {}

  @Get()
  async getAllFacturas() {
    return this.facturasPService.findAll();
  }

  @Get(':id')
  async getFactura(@Param('id') id: number) {
    return this.facturasPService.findOne(id);
  }

  @Post()
  async createFactura(@Body() CreateFacturasPDto: CreateFacturasPDto) {
    return this.facturasPService.create(CreateFacturasPDto);
  }

  @Put(':id')
  async updateFactura(
    @Param('id') id: number,
    @Body() facturaProveedorDto: FacturaProveedorDto,
  ) {
    return this.facturasPService.update(id, facturaProveedorDto);
  }

  @Delete(':id')
  async deleteFactura(@Param('id') id: number) {
    return this.facturasPService.delete(id);
  }
}
