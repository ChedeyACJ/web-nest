import { Controller, Get } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { Persona } from './personas.entity';

@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Get()
  async getAll(): Promise<Persona[]> {
    return this.personasService.getPersons();
  }

  @Get('az')
  async getPersonsAZ(): Promise<Persona[]> {
    return this.personasService.getPersonsAZ();
  }

  @Get('za')
  async getPersonsZA(): Promise<Persona[]> {
    return this.personasService.getPersonsZA();
  }
}
