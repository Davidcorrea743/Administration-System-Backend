import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum SeniatTipoEnum {
  IVA = 'IVA',
  ISLR = 'ISLR',
}

@Entity()
export class Seniat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  fecha?: Date;

  @Column({ nullable: true })
  periodoPagar?: string;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  montoPagar: number;

  @Column({ nullable: true, type: 'enum', enum: SeniatTipoEnum })
  tipo?: SeniatTipoEnum.IVA;

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

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  deletedAt: Date;
}
