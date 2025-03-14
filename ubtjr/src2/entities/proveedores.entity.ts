import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Proveedor {
  @PrimaryColumn('bigint')
  rif: number;

  @Column({ nullable: false })
  fechaVencimientoRif: Date;

  @Column({ nullable: false })
  razonSocial: string;

  @Column({ default: 'J' })
  tipoRif: string;

  @Column({ nullable: true })
  noOficina: string;

  @Column({ nullable: true })
  direccion: string;

  @Column('decimal', { default: 0 })
  porcentaje_retencion: number;

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
