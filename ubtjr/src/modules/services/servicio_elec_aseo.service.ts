import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ServicioElecAseo } from 'src/entities/servicio_elec_aseo.entity';

import {
  CreateServicioElecAseoDto,
  UpdateServicioElecAseoDto,
} from 'src/modules/dtos/servicio_elec_aseo.dto';

@Injectable()
export class ServicioElecAseoService {
  constructor(
    @InjectRepository(ServicioElecAseo)
    private readonly servicioElecAseoRepository: Repository<ServicioElecAseo>,
  ) {}

  async findAll(): Promise<ServicioElecAseo[]> {
    return this.servicioElecAseoRepository.find();
  }

  async findOne(id: number): Promise<ServicioElecAseo> {
    const servicio = await this.servicioElecAseoRepository.findOne({
      where: { id },
    });
    if (!servicio) {
      throw new NotFoundException(`ServicioElecAseo with ID ${id} not found`);
    }
    return servicio;
  }

  async create(
    createServicioElecAseoDto: CreateServicioElecAseoDto,
  ): Promise<ServicioElecAseo> {
    const servicio = this.servicioElecAseoRepository.create(
      createServicioElecAseoDto,
    );
    return this.servicioElecAseoRepository.save(servicio);
  }

  async update(
    id: number,
    updateServicioElecAseoDto: UpdateServicioElecAseoDto,
  ): Promise<ServicioElecAseo> {
    const servicio = await this.findOne(id);
    const updatedServicio = Object.assign(servicio, updateServicioElecAseoDto);
    return this.servicioElecAseoRepository.save(updatedServicio);
  }

  async delete(id: number): Promise<void> {
    const servicio = await this.findOne(id);
    await this.servicioElecAseoRepository.softRemove(servicio);
  }
}
