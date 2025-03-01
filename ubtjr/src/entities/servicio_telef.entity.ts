import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ServicioTelef {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  fecha: Date;

  @Column({ nullable: true })
  mesPagar: string;

  @Column('bigint', { default: 0 })
  rif: number;

  @Column({ nullable: true })
  nombre: string;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  montoPagar: number;

  @Column({ nullable: true })
  noOficina: string;

  @Column({ nullable: true })
  noLinea: string;

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
