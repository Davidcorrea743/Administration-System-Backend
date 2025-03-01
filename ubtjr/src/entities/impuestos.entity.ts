import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ImpuestosTipoEnum {
  UNOMIL = '1XMIL',
  UNOQUINCE = '1,15%',
}

@Entity()
export class Impuestos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  fecha: Date;

  @Column('bigint', { default: 0 })
  noFactura: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  montoPagar: number;

  @Column({ nullable: false, type: 'enum', enum: ImpuestosTipoEnum })
  tipo?: ImpuestosTipoEnum.UNOMIL;

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
