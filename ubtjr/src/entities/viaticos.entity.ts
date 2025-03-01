import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Viaticos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  fecha: Date;

  @Column({ nullable: true })
  nombre: string;

  @Column('bigint', { default: 0 })
  cedula: number;

  @Column({ nullable: true })
  cargo: string;

  @Column({ nullable: true })
  concepto: string;

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
