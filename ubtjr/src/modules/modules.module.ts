import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Condominio } from 'src/entities/condominio.entity';
import { FacturasProveedor } from 'src/entities/facturas_proveedor.entity';
import { Impuestos } from 'src/entities/impuestos.entity';
import { Nomina } from 'src/entities/nomina.entity';
import { Seniat } from 'src/entities/seniat.entity';
import { ServicioElecAseo } from 'src/entities/servicio_elec_aseo.entity';
import { ServicioTelef } from 'src/entities/servicio_telef.entity';
import { Viaticos } from 'src/entities/viaticos.entity';

import { CondominioController } from 'src/modules/controllers/condominio.controller';
import { FacturasPController } from 'src/modules/controllers/facturas_proveedor.controller';
import { ImpuestosController } from 'src/modules/controllers/impuestos.controller';
import { NominaController } from 'src/modules/controllers/nomina.controller';
import { SeniatController } from 'src/modules/controllers/seniat.controller';
import { ServicioTelefController } from 'src/modules/controllers/servicio_telef.controller';
import { ServicioElecAseoController } from 'src/modules/controllers/servicio_elec_aseo.controller';
import { ViaticosController } from 'src/modules/controllers/viaticos.controller';
import { CondominioService } from 'src/modules/services/condominio.service';
import { FacturasPService } from 'src/modules/services/facturas_proveedor.service';
import { ImpuestosService } from 'src/modules/services/impuestos.service';
import { NominaService } from 'src/modules/services/nomina.service';
import { SeniatService } from 'src/modules/services/seniat.service';
import { ServicioElecAseoService } from 'src/modules/services/servicio_elec_aseo.service';
import { ServicioTelefService } from 'src/modules/services/servicio_telef.service';
import { ViaticosService } from 'src/modules/services/viaticos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Condominio,
      FacturasProveedor,
      Impuestos,
      Nomina,
      Seniat,
      ServicioElecAseo,
      ServicioTelef,
      Viaticos,
    ]),
  ],
  controllers: [
    CondominioController,
    FacturasPController,
    ImpuestosController,
    NominaController,
    SeniatController,
    ServicioElecAseoController,
    ServicioTelefController,
    ViaticosController,
  ],
  providers: [
    CondominioService,
    FacturasPService,
    ImpuestosService,
    NominaService,
    SeniatService,
    ServicioElecAseoService,
    ServicioTelefService,
    ViaticosService,
  ],
})
export class ModulesModule {}
