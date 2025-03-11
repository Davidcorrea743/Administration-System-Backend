import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum MesesEnum {
  ENERO = 'ENE',
  FEBRERO = 'FEB',
  MARZO = 'MAR',
  ABRIL = 'ABR',
  MAYO = 'MAY',
  JUNIO = 'JUN',
  JULIO = 'JUL',
  AGOSTO = 'AGO',
  SEPTIEMBRE = 'SEP',
  OCTUBRE = 'OCT',
  NOVIEMBRE = 'NOV',
  DICIEMBRE = 'DIC',
}

@Entity()
export class Condominio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  fecha: Date;

  @Column({ nullable: false, type: 'enum', enum: MesesEnum })
  mesPagar: MesesEnum;

  @Column({ nullable: true })
  nombre: string;

  @Column('bigint', { default: 0 })
  rifCondominio: number;

  @Column({ nullable: true })
  noOficina: string;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  montoPagar: number;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt: Date;
}
