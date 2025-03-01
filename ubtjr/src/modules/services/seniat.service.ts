import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Seniat } from 'src/entities/seniat.entity';

import { CreateSeniatDto, UpdateSeniatDto } from 'src/modules/dtos/seniat.dto';

@Injectable()
export class SeniatService {
  constructor(
    @InjectRepository(Seniat)
    private readonly seniatRepository: Repository<Seniat>,
  ) {}

  async findAll(): Promise<Seniat[]> {
    return this.seniatRepository.find();
  }

  async findOne(id: number): Promise<Seniat> {
    const seniat = await this.seniatRepository.findOne({ where: { id } });
    if (!seniat) {
      throw new NotFoundException(`Seniat with ID ${id} not found`);
    }
    return seniat;
  }

  async create(createSeniatDto: CreateSeniatDto): Promise<Seniat> {
    const seniat = this.seniatRepository.create(createSeniatDto);
    return this.seniatRepository.save(seniat);
  }

  async update(id: number, updateSeniatDto: UpdateSeniatDto): Promise<Seniat> {
    const seniat = await this.findOne(id);
    const updatedSeniat = Object.assign(seniat, updateSeniatDto);
    return this.seniatRepository.save(updatedSeniat);
  }

  async delete(id: number): Promise<void> {
    const seniat = await this.findOne(id);
    await this.seniatRepository.softRemove(seniat);
  }
}
