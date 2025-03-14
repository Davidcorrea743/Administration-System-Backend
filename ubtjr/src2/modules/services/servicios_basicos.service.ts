import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ServicioBasico } from 'src2/entities/servicios_basicos';

import {
  CreateServicioBasicoDto,
  UpdateServicioBasicoDto,
} from 'src2/modules/dtos/servicios_basicos.dto';

@Injectable()
export class ServicioBasicoService {
  constructor(
    @InjectRepository(ServicioBasico)
    private readonly sBasicoRepo: Repository<ServicioBasico>,
  ) {}

  async findAll(): Promise<ServicioBasico[]> {
    return this.sBasicoRepo.find();
  }

  async findOne(id: number): Promise<ServicioBasico> {
    const servicio = await this.sBasicoRepo.findOne({
      where: { id },
    });
    if (!servicio) {
      throw new NotFoundException(`ServicioBasico with ID ${id} not found`);
    }
    return servicio;
  }

  async create(
    createServicioBasicoDto: CreateServicioBasicoDto,
  ): Promise<ServicioBasico> {
    const servicio = this.sBasicoRepo.create(createServicioBasicoDto);
    return this.sBasicoRepo.save(servicio);
  }

  async update(
    id: number,
    updateServicioBasicoDto: UpdateServicioBasicoDto,
  ): Promise<ServicioBasico> {
    const servicio = await this.findOne(id);
    const updatedServicio = this.sBasicoRepo.merge(
      servicio,
      updateServicioBasicoDto,
    );
    return this.sBasicoRepo.save(updatedServicio);
  }

  async delete(id: number): Promise<void> {
    const servicio = await this.findOne(id);
    await this.sBasicoRepo.softRemove(servicio);
  }
}
