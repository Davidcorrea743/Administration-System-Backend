import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Proveedor } from './proveedores.entity';

@Entity()
export class FacturasProveedor {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.rif, { nullable: false })
  @JoinColumn({ name: 'rif' })
  proveedor: Proveedor;

  @Column({ nullable: true })
  nombre: string;

  @Column('bigint', { default: '0' })
  noFactura: number;

  @Column({ nullable: true })
  fecha: Date;

  @Column({ nullable: true })
  fecha_vencimiento: Date;

  @Column('decimal', { default: 0 })
  sub_total: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  base: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  iva: number;

  @Column('decimal', { precision: 20, scale: 2, default: 16 })
  porcentajeIva: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  total: number;

  @Column({ type: 'boolean', default: false })
  retieneIva: boolean;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  retencionIva: number;

  @Column({ type: 'boolean', default: false })
  retieneIslr: boolean;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  retencionIslr: number;

  @Column({ type: 'boolean', default: false })
  retiene1xMil: boolean;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  retencion1xMil: number;

  @Column({ type: 'boolean', default: false })
  retiene115: boolean;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  retencion115: number;

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
