import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Condominio } from 'src2/entities/condominio.entity';
import { FacturasProveedor } from 'src2/entities/facturas_proveedor.entity';
import { Impuestos } from 'src2/entities/impuestos.entity';
import { Nomina } from 'src2/entities/nomina.entity';
import { Proveedor } from 'src2/entities/proveedores.entity';
import { Seniat } from 'src2/entities/seniat.entity';
import { ServicioBasico } from 'src2/entities/servicios_basicos';
import { Viaticos } from 'src2/entities/viaticos.entity';

import { CondominioController } from 'src2/modules/controllers/condominio.controller';
import { FacturasPController } from 'src2/modules/controllers/facturas_proveedor.controller';
import { ImpuestosController } from 'src2/modules/controllers/impuestos.controller';
import { NominaController } from 'src2/modules/controllers/nomina.controller';
import { ProveedorController } from 'src2/modules/controllers/proveedores.controller';
import { SeniatController } from 'src2/modules/controllers/seniat.controller';
import { ServicioBasicoController } from 'src2/modules/controllers/servicios_basicos.controller';
import { ViaticosController } from 'src2/modules/controllers/viaticos.controller';
import { CondominioService } from 'src2/modules/services/condominio.service';
import { FacturasPService } from 'src2/modules/services/facturas_proveedor.service';
import { ImpuestosService } from 'src2/modules/services/impuestos.service';
import { NominaService } from 'src2/modules/services/nomina.service';
import { ProveedorService } from 'src2/modules/services/proveedores.service';
import { SeniatService } from 'src2/modules/services/seniat.service';
import { ServicioBasicoService } from 'src2/modules/services/servicios_basicos.service';
import { ViaticosService } from 'src2/modules/services/viaticos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Condominio,
      FacturasProveedor,
      Impuestos,
      Nomina,
      Proveedor,
      Seniat,
      ServicioBasico,
      Viaticos,
    ]),
  ],
  controllers: [
    CondominioController,
    FacturasPController,
    ImpuestosController,
    NominaController,
    ProveedorController,
    SeniatController,
    ServicioBasicoController,
    ViaticosController,
  ],
  providers: [
    CondominioService,
    FacturasPService,
    ImpuestosService,
    NominaService,
    ProveedorService,
    SeniatService,
    ServicioBasicoService,
    ViaticosService,
  ],
})
export class ModulesModule {}
