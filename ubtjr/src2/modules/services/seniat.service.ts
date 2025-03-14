import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Seniat } from 'src2/entities/seniat.entity';

import { CreateSeniatDto, UpdateSeniatDto } from 'src2/modules/dtos/seniat.dto';

@Injectable()
export class SeniatService {
  constructor(
    @InjectRepository(Seniat)
    private readonly seniatRepo: Repository<Seniat>,
  ) {}

  async findAll(): Promise<Seniat[]> {
    return this.seniatRepo.find();
  }

  async findOne(id: number): Promise<Seniat> {
    const seniat = await this.seniatRepo.findOne({ where: { id } });
    if (!seniat) {
      throw new NotFoundException(`Seniat with ID ${id} not found`);
    }
    return seniat;
  }

  async create(createSeniatDto: CreateSeniatDto): Promise<Seniat> {
    const seniat = this.seniatRepo.create(createSeniatDto);
    return this.seniatRepo.save(seniat);
  }

  async update(id: number, updateSeniatDto: UpdateSeniatDto): Promise<Seniat> {
    const seniat = await this.findOne(id);
    const updatedSeniat = this.seniatRepo.merge(seniat, updateSeniatDto);
    return this.seniatRepo.save(updatedSeniat);
  }

  async delete(id: number): Promise<void> {
    const seniat = await this.findOne(id);
    await this.seniatRepo.softRemove(seniat);
  }
}
