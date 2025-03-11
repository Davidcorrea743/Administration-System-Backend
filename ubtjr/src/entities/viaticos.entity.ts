import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum EstadosTipoEnum {
  AMAZONAS = 'AMA',
  ANZOATEGUI = 'ANZ',
  APURE = 'APU',
  ARAGUA = 'ARA',
  BARINAS = 'BAR',
  BOLIVAR = 'BOL',
  CARABOBO = 'CAR',
  COJEDES = 'COJ',
  DELTA_AMACURO = 'DAM',
  DTTO_CAPITAL = 'DTO',
  FALCON = 'FAL',
  GUARICO = 'GUA',
  LA_GUAIRA = 'LGU',
  LARA = 'LAR',
  MERIDA = 'MER',
  MIRANDA = 'MIR',
  MONAGAS = 'MON',
  NUEVA_ESPARTA = 'NES',
  PORTUGUESA = 'POR',
  SUCRE = 'SUC',
  TACHIRA = 'TAC',
  TRUJILLO = 'TRU',
  YARACUY = 'YAR',
  ZULIA = 'ZUL',
}

@Entity()
export class Viaticos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz', nullable: true })
  fecha: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nombre: string;

  @Column('bigint', { default: 0 })
  cedula: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  cargo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  tipoPersonal: string;

  @Column({ type: 'text', nullable: true })
  concepto: string;

  @Column({ type: 'timestamptz' })
  fechaInicio: Date;

  @Column({ type: 'timestamptz' })
  fechaFin: Date;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  monto: number;

  @Column({ type: 'enum', enum: EstadosTipoEnum, nullable: false })
  estado: EstadosTipoEnum;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt: Date;
}
