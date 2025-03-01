import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FacturasProveedor } from 'src/entities/facturas_proveedor.entity';

import {
  CreateFacturasPDto,
  UpdateFacturasPDto,
} from 'src/modules/dtos/facturas_proveedor.dto';

@Injectable()
export class FacturasPService {
  constructor(
    @InjectRepository(FacturasProveedor)
    private readonly facturasProveedorRepository: Repository<FacturasProveedor>,
  ) {}

  async findAll(): Promise<FacturasProveedor[]> {
    return this.facturasProveedorRepository.find();
  }

  async findOne(id: number): Promise<FacturasProveedor> {
    const factura = await this.facturasProveedorRepository.findOne({
      where: { id },
    });
    if (!factura) {
      throw new NotFoundException(`Factura with ID ${id} not found`);
    }
    return factura;
  }

  async create(
    CreateFacturasPDto: CreateFacturasPDto,
  ): Promise<FacturasProveedor> {
    const factura = this.facturasProveedorRepository.create(
      CreateFacturasPDto,
    );
    return this.facturasProveedorRepository.save(factura);
  }

  async update(
    id: number,
    UpdateFacturasPDto: UpdateFacturasPDto,
  ): Promise<FacturasProveedor> {
    const factura = await this.findOne(id);
    const updatedFactura = Object.assign(factura, UpdateFacturasPDto);
    return this.facturasProveedorRepository.save(updatedFactura);
  }

  async delete(id: number): Promise<void> {
    const factura = await this.findOne(id);
    await this.facturasProveedorRepository.softRemove(factura);
  }
}
