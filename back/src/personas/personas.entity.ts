import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id!: number;  // Usa "!" para evitar el error

  @Column()
  nombre!: string;

  @Column()
  edad!: number;
}
