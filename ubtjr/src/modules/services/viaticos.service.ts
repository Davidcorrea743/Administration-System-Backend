import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Viaticos } from 'src/entities/viaticos.entity';

import {
  CreateViaticosDto,
  UpdateViaticosDto,
} from 'src/modules/dtos/viaticos.dto';

@Injectable()
export class ViaticosService {
  constructor(
    @InjectRepository(Viaticos)
    private readonly viaticosRepository: Repository<Viaticos>,
  ) {}

  async findAll(): Promise<Viaticos[]> {
    return this.viaticosRepository.find();
  }

  async findOne(id: number): Promise<Viaticos> {
    const viatico = await this.viaticosRepository.findOne({ where: { id } });
    if (!viatico) {
      throw new NotFoundException(`Viaticos with ID ${id} not found`);
    }
    return viatico;
  }

  async create(createViaticosDto: CreateViaticosDto): Promise<Viaticos> {
    const viatico = this.viaticosRepository.create(createViaticosDto);
    return this.viaticosRepository.save(viatico);
  }

  async update(
    id: number,
    updateViaticosDto: UpdateViaticosDto,
  ): Promise<Viaticos> {
    const viatico = await this.findOne(id);
    const updatedViatico = Object.assign(viatico, updateViaticosDto);
    return this.viaticosRepository.save(updatedViatico);
  }

  async delete(id: number): Promise<void> {
    const viatico = await this.findOne(id);
    await this.viaticosRepository.softRemove(viatico);
  }
}
