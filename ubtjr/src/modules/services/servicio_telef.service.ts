import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ServicioTelef } from 'src/entities/servicio_telef.entity';

import { CreateServicioTelefDto, UpdateServicioTelefDto } from 'src/modules/dtos/servicio_telef.dto';

@Injectable()
export class ServicioTelefService {
  constructor(
    @InjectRepository(ServicioTelef)
    private readonly servicioTelefRepository: Repository<ServicioTelef>,
  ) {}

  async findAll(): Promise<ServicioTelef[]> {
    return this.servicioTelefRepository.find();
  }

  async findOne(id: number): Promise<ServicioTelef> {
    const servicio = await this.servicioTelefRepository.findOne({ where: { id } });
    if (!servicio) {
      throw new NotFoundException(`ServicioTelef with ID ${id} not found`);
    }
    return servicio;
  }

  async create(createServicioTelefDto: CreateServicioTelefDto): Promise<ServicioTelef> {
    const servicio = this.servicioTelefRepository.create(createServicioTelefDto);
    return this.servicioTelefRepository.save(servicio);
  }

  async update(id: number, updateServicioTelefDto: UpdateServicioTelefDto): Promise<ServicioTelef> {
    const servicio = await this.findOne(id);
    const updatedServicio = Object.assign(servicio, updateServicioTelefDto);
    return this.servicioTelefRepository.save(updatedServicio);
  }

  async delete(id: number): Promise<void> {
    const servicio = await this.findOne(id);
    await this.servicioTelefRepository.softRemove(servicio);
  }
}
