import { Controller, Get } from '@nestjs/common';
import { PersonasService } from './personas.service';

@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Get()
  async getAll(): Promise<any[]> {  
    return this.personasService.getPersons();
  }

  @Get('az')
  async getPersonsAZ(): Promise<any[]> { 
    return this.personasService.getPersonsAZ();
  }

  @Get('za')
  async getPersonsZA(): Promise<any[]> {  
    return this.personasService.getPersonsZA();
  }
}
