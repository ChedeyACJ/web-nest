import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class PersonasService implements OnModuleInit {
  private personas: any[] = [];

  constructor(
  @InjectDataSource() private readonly dataSource: DataSource,
) {}


  // Se llama automáticamente al iniciar el servicio
  async onModuleInit() {
    await this.cargarPersonas();
  }

  private async cargarPersonas() {
    this.personas = await this.dataSource.query('SELECT * FROM persona');
  }

  getPersons(): any[] {
    return this.personas;
  }

  getPersonsAZ(): any[] {
    return [...this.personas].sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  getPersonsZA(): any[] {
    return [...this.personas].sort((a, b) => b.nombre.localeCompare(a.nombre));
  }

  getPersonsDepComercial(): any[] {
    return this.personas.filter(persona => persona.departamento === 'Comercial');
  }

  getPersonsLugarGranCanaria(): any[] {
    return this.personas.filter(persona => persona.lugar === 'Gran Canaria');
  }

  getPersonsComercialesGranCanaria(): any[] {
    return this.personas.filter(persona =>
      persona.lugar === 'Gran Canaria' && persona.departamento === 'Comercial'
    );
  }
}