import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Condominio } from 'src/entities/condominio.entity';

import {
  CreateCondominioDto,
  UpdateCondominioDto
} from 'src/modules/dtos/condominio.dto';

@Injectable()
export class CondominioService {
  constructor(
    @InjectRepository(Condominio)
    private readonly condominioRepository: Repository<Condominio>,
  ) {}

  async findAll(): Promise<Condominio[]> {
    return this.condominioRepository.find();
  }

  async findOne(id: number): Promise<Condominio> {
    const condominio = await this.condominioRepository.findOne({ where: { id } });
    if (!condominio) {
      throw new NotFoundException(`Condominio with ID ${id} not found`);
    }
    return condominio;
  }

  async create(createCondominioDto: CreateCondominioDto): Promise<Condominio> {
    const condominio = this.condominioRepository.create(createCondominioDto);
    return this.condominioRepository.save(condominio);
  }

  async update(id: number, updateCondominioDto: UpdateCondominioDto): Promise<Condominio> {
    const condominio = await this.findOne(id);
    const updatedCondominio = Object.assign(condominio, updateCondominioDto);
    return this.condominioRepository.save(updatedCondominio);
  }

  async delete(id: number): Promise<void> {
    const condominio = await this.findOne(id);
    await this.condominioRepository.softRemove(condominio);
  }
}
