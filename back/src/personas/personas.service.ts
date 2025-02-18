import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './personas.entity';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private readonly personasRepository: Repository<Persona>,
  ) {}

  async getPersons(): Promise<Persona[]> {
    return await this.personasRepository.find();
  }

  async getPersonsAZ(): Promise<Persona[]> {
    return await this.personasRepository.find({ order: { nombre: 'ASC' } });
  }

  async getPersonsZA(): Promise<Persona[]> {
    return await this.personasRepository.find({ order: { nombre: 'DESC' } });
  }
}
