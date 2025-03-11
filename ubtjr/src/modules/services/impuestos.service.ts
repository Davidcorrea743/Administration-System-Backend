import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Impuestos } from 'src/entities/impuestos.entity';

import {
  CreateImpuestosDto,
  UpdateImpuestosDto,
} from 'src/modules/dtos/impuestos.dto';

@Injectable()
export class ImpuestosService {
  constructor(
    @InjectRepository(Impuestos)
    private readonly impuestosRepo: Repository<Impuestos>,
  ) {}

  async findAll(): Promise<Impuestos[]> {
    return this.impuestosRepo.find();
  }

  async findOne(id: number): Promise<Impuestos> {
    const impuesto = await this.impuestosRepo.findOne({ where: { id } });
    if (!impuesto) {
      throw new NotFoundException(`Impuesto with ID ${id} not found`);
    }
    return impuesto;
  }

  async create(createImpuestosDto: CreateImpuestosDto): Promise<Impuestos> {
    const impuesto = this.impuestosRepo.create(createImpuestosDto);
    return this.impuestosRepo.save(impuesto);
  }

  async update(
    id: number,
    updateImpuestosDto: UpdateImpuestosDto,
  ): Promise<Impuestos> {
    const impuesto = await this.findOne(id);
    const updatedImpuesto = this.impuestosRepo.merge(
      impuesto,
      updateImpuestosDto,
    );
    return this.impuestosRepo.save(updatedImpuesto);
  }

  async delete(id: number): Promise<void> {
    const impuesto = await this.findOne(id);
    await this.impuestosRepo.softRemove(impuesto);
  }
}
