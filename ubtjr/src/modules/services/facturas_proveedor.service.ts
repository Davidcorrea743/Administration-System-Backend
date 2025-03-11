import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FacturasProveedor } from 'src/entities/facturas_proveedor.entity';

import {
  CreateFacturasPDto,
  UpdateFacturasPDto,
} from 'src/modules/dtos/facturas_proveedor.dto';

import { FacturaProveedorDto } from 'src/modules/dtos/proveedores.dto';
import { Proveedor } from 'src/entities/proveedores.entity';

@Injectable()
export class FacturasPService {
  constructor(
    @InjectRepository(FacturasProveedor)
    private readonly fProvedorRepo: Repository<FacturasProveedor>,
    @InjectRepository(Proveedor)
    private readonly proveedorRepo: Repository<Proveedor>,
  ) {}

  async findAll(): Promise<FacturaProveedorDto[]> {
    const facturas = await this.fProvedorRepo.find({
      relations: ['proveedor'],
      where: { proveedor: { deletedAt: null } },
    });
    return facturas.map((factura) => ({
      id: factura.id,
      rif: factura.proveedor.rif,
      nombreProveedor: factura.proveedor.razonSocial,
      nombre: factura.nombre,
      noFactura: factura.noFactura,
      fecha: factura.fecha,
      fecha_vencimiento: factura.fecha_vencimiento,
      sub_total: factura.sub_total,
      base: factura.base,
      iva: factura.iva,
      porcentajeIva: factura.porcentajeIva,
      total: factura.total,
      retieneIva: factura.retieneIva,
      retencionIva: factura.retencionIva,
      retieneIslr: factura.retieneIslr,
      retencionIslr: factura.retencionIslr,
      retiene1xMil: factura.retiene1xMil,
      retencion1xMil: factura.retencion1xMil,
      retiene115: factura.retiene115,
      retencion115: factura.retencion115,
      createdAt: factura.createdAt,
      updatedAt: factura.updatedAt,
      deletedAt: factura.deletedAt,
    }));
  }

  async findOne(id: number): Promise<FacturaProveedorDto> {
    const factura = await this.fProvedorRepo.findOne({
      where: { id, proveedor: { deletedAt: null } },
      relations: ['proveedor'],
    });
    if (!factura) {
      throw new NotFoundException(`Factura with ID ${id} not found`);
    }
    return {
      id: factura.id,
      rif: factura.proveedor.rif,
      nombreProveedor: factura.proveedor.razonSocial,
      nombre: factura.nombre,
      noFactura: factura.noFactura,
      fecha: factura.fecha,
      fecha_vencimiento: factura.fecha_vencimiento,
      sub_total: factura.sub_total,
      base: factura.base,
      iva: factura.iva,
      porcentajeIva: factura.porcentajeIva,
      total: factura.total,
      retieneIva: factura.retieneIva,
      retencionIva: factura.retencionIva,
      retieneIslr: factura.retieneIslr,
      retencionIslr: factura.retencionIslr,
      retiene1xMil: factura.retiene1xMil,
      retencion1xMil: factura.retencion1xMil,
      retiene115: factura.retiene115,
      retencion115: factura.retencion115,
      createdAt: factura.createdAt,
      updatedAt: factura.updatedAt,
      deletedAt: factura.deletedAt,
    };
  }

  async create(payload: CreateFacturasPDto): Promise<FacturasProveedor> {
    const proveedor = await this.proveedorRepo.findOne({
      where: { rif: payload.rif },
    });
    if (!proveedor) {
      throw new NotFoundException(
        `Proveedor with rif ${payload.rif} not found`,
      );
    }
    payload['proveedor'] = proveedor;
    const factura = this.fProvedorRepo.create(payload);
    return this.fProvedorRepo.save(factura);
  }

  async update(
    id: number,
    UpdateFacturasPDto: FacturaProveedorDto,
  ): Promise<FacturasProveedor> {
    const factura = await this.fProvedorRepo.findOne({
      where: { id, proveedor: { deletedAt: null } },
      relations: ['proveedor'],
    });
    if (!factura) {
      throw new NotFoundException(`Factura with ID ${id} not found`);
    }
    const updatedFactura = this.fProvedorRepo.merge(
      factura,
      UpdateFacturasPDto,
    );
    return this.fProvedorRepo.save(updatedFactura);
  }

  async delete(id: number): Promise<void> {
    const factura = await this.findOne(id);
    await this.fProvedorRepo.softRemove(factura);
  }
}
