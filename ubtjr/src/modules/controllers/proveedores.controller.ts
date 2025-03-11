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
    CreateProveedorDto,
    UpdateProveedorDto,
  } from 'src/modules/dtos/proveedores.dto';
  import { ProveedorService } from 'src/modules/services/proveedores.service';

  @ApiBearerAuth()
  @ApiTags('Proveedor')
  @Controller('Proveedor')
  @UseGuards(JwtAuthGuard, RolesGuard)
  export class ProveedorController {
    constructor(private readonly proveedorService: ProveedorService) {}

    // Condominio Endpoints

    @Get('')
    async getAllProveedores() {
      return this.proveedorService.findAll();
    }

    @Get('listAll')
    async listAll() {
      return this.proveedorService.listAll();
    }

    @Get(':id')
    async getProveedor(@Param('id') id: number) {
      return this.proveedorService.findOne(id);
    }

    @Post('')
    async createProveedor(@Body() createProveedorDto: CreateProveedorDto) {
      return this.proveedorService.create(createProveedorDto);
    }

    @Put(':id')
    async updateProveedor(
      @Param('id') id: number,
      @Body() updateProveedorDto: UpdateProveedorDto,
    ) {
      return this.proveedorService.update(id, updateProveedorDto);
    }

    @Delete(':id')
    async deleteProveedor(@Param('id') id: number) {
      return this.proveedorService.delete(id);
    }
  }
