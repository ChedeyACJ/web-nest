import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class PersonasService {
  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
  ) {}

  async getPersons(): Promise<any[]> {
    return await this.dataSource.query('SELECT * FROM persona');
  }

  async getPersonsAZ(): Promise<any[]> {
    return await this.dataSource.query('SELECT * FROM persona ORDER BY nombre ASC');
  }

  async getPersonsZA(): Promise<any[]> {
    return await this.dataSource.query('SELECT * FROM persona ORDER BY nombre DESC');
  }
}
