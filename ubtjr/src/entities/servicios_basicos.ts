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

export enum ServiciosEnum {
  HIDROCAPITAL = 'HIDROCAPITAL',
  CORPOELEC = 'CORPOELEC',
  ASEO = 'ASEO',
  CANTV = 'CANTV',
  MOVISTAR = 'MOVISTAR',
  MOVILNET = 'MOVILNET',
  DIGITEL = 'DIGITEL',
}

@Entity()
export class ServicioBasico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz', nullable: true })
  fecha: Date;

  @Column({ type: 'enum', enum: MesesEnum, nullable: false })
  mesPagar: MesesEnum;

  @Column({ nullable: true })
  noOficina?: string;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  montoPagar: number;

  @Column('decimal', { precision: 20, scale: 2, default: 0 })
  iva: number;

  @Column({ type: 'enum', enum: ServiciosEnum, nullable: false })
  serviciosBasicos: ServiciosEnum;

  @Column({ nullable: false })
  contratoControlTelefono: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt: Date;
}
