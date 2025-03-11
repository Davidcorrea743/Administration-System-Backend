import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Condominio } from 'src/entities/condominio.entity';

import {
  CreateCondominioDto,
  UpdateCondominioDto,
} from 'src/modules/dtos/condominio.dto';

@Injectable()
export class CondominioService {
  constructor(
    @InjectRepository(Condominio)
    private readonly condRepo: Repository<Condominio>,
  ) {}

  async findAll(): Promise<Condominio[]> {
    return this.condRepo.find();
  }

  async findOne(id: number): Promise<Condominio> {
    const condominio = await this.condRepo.findOne({
      where: { id },
    });
    if (!condominio) {
      throw new NotFoundException(`Condominio with ID ${id} not found`);
    }
    return condominio;
  }

  async create(createCondominioDto: CreateCondominioDto): Promise<Condominio> {
    const condominio = this.condRepo.create(createCondominioDto);
    return this.condRepo.save(condominio);
  }

  async update(
    id: number,
    updateCondominioDto: UpdateCondominioDto,
  ): Promise<Condominio> {
    const condominio = await this.findOne(id);
    const updatedCondominio = this.condRepo.merge(
      condominio,
      updateCondominioDto,
    );
    return this.condRepo.save(updatedCondominio);
  }

  async delete(id: number): Promise<void> {
    const condominio = await this.findOne(id);
    await this.condRepo.softRemove(condominio);
  }
}
