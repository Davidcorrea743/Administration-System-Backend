import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Nomina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  fecha: Date;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  sueldo: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  primas: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  complementos: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  asistenciaSE: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  aguinaldos: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  bonoVacacional: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  otrasSubvenciones: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  prestacionesSociales: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  retencionesIVSS: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  retencionSPF: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  retencionISLR: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  retencionFAOV: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  comisionesBancarias: number;

  @Column('decimal', { precision: 30, scale: 2, default: 0 })
  total_nomina: number;

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
