import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ServicioElecAseo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  fecha: Date;

  @Column({ nullable: true })
  mesPagar: string;

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

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  deletedAt: Date;
}
