import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Nomina } from 'src/entities/nomina.entity';

import { CreateNominaDto, UpdateNominaDto } from 'src/modules/dtos/nomina.dto';

@Injectable()
export class NominaService {
  constructor(
    @InjectRepository(Nomina)
    private readonly nominaRepository: Repository<Nomina>,
  ) {}

  async findAll(): Promise<Nomina[]> {
    return this.nominaRepository.find();
  }

  async findOne(id: number): Promise<Nomina> {
    const nomina = await this.nominaRepository.findOne({ where: { id } });
    if (!nomina) {
      throw new NotFoundException(`Nomina with ID ${id} not found`);
    }
    return nomina;
  }

  async create(createNominaDto: CreateNominaDto): Promise<Nomina> {
    const nomina = this.nominaRepository.create(createNominaDto);
    return this.nominaRepository.save(nomina);
  }

  async update(id: number, updateNominaDto: UpdateNominaDto): Promise<Nomina> {
    const nomina = await this.findOne(id);
    const updatedNomina = Object.assign(nomina, updateNominaDto);
    return this.nominaRepository.save(updatedNomina);
  }

  async delete(id: number): Promise<void> {
    const nomina = await this.findOne(id);
    await this.nominaRepository.softRemove(nomina);
  }
}
