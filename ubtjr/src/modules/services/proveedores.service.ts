import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Proveedor } from 'src/entities/proveedores.entity';

import {
  CreateProveedorDto,
  UpdateProveedorDto,
} from 'src/modules/dtos/proveedores.dto';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private readonly proveedorRepo: Repository<Proveedor>,
  ) {}

  async findAll(): Promise<Proveedor[]> {
    return this.proveedorRepo.find();
  }

  async findOne(rif: number): Promise<Proveedor> {
    const proveedor = await this.proveedorRepo.findOne({ where: { rif } });
    if (!proveedor) {
      throw new NotFoundException(`Proveedor with rif ${rif} not found`);
    }
    return proveedor;
  }

  async listAll(): Promise<{ rif: number; descripcion: string }[]> {
    const proveedores = await this.proveedorRepo.find();

    return proveedores.map(proveedor => ({
      rif: proveedor.rif,
      descripcion: `${proveedor.tipoRif}-${proveedor.rif}, ${proveedor.razonSocial}`,
    }));
  }

  async create(createProveedorDto: CreateProveedorDto): Promise<Proveedor> {
    const proveedor = this.proveedorRepo.create(createProveedorDto);
    return this.proveedorRepo.save(proveedor);
  }

  async update(
    id: number,
    updateProveedorDto: UpdateProveedorDto,
  ): Promise<Proveedor> {
    const proveedor = await this.findOne(id);
    const updatedProveedor = this.proveedorRepo.merge(
      proveedor,
      updateProveedorDto,
    );
    return this.proveedorRepo.save(updatedProveedor);
  }

  async delete(id: number): Promise<void> {
    const proveedor = await this.findOne(id);
    await this.proveedorRepo.softRemove(proveedor);
  }
}
