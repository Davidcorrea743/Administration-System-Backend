import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Condominio } from 'src/entities/condominio.entity';
import { FacturasProveedor } from 'src/entities/facturas_proveedor.entity';
import { Impuestos } from 'src/entities/impuestos.entity';
import { Nomina } from 'src/entities/nomina.entity';
import { Proveedor } from 'src/entities/proveedores.entity';
import { Seniat } from 'src/entities/seniat.entity';
import { ServicioBasico } from 'src/entities/servicios_basicos';
import { Viaticos } from 'src/entities/viaticos.entity';

import { CondominioController } from 'src/modules/controllers/condominio.controller';
import { FacturasPController } from 'src/modules/controllers/facturas_proveedor.controller';
import { ImpuestosController } from 'src/modules/controllers/impuestos.controller';
import { NominaController } from 'src/modules/controllers/nomina.controller';
import { ProveedorController } from 'src/modules/controllers/proveedores.controller';
import { SeniatController } from 'src/modules/controllers/seniat.controller';
import { ServicioBasicoController } from 'src/modules/controllers/servicios_basicos.controller';
import { ViaticosController } from 'src/modules/controllers/viaticos.controller';
import { CondominioService } from 'src/modules/services/condominio.service';
import { FacturasPService } from 'src/modules/services/facturas_proveedor.service';
import { ImpuestosService } from 'src/modules/services/impuestos.service';
import { NominaService } from 'src/modules/services/nomina.service';
import { ProveedorService } from 'src/modules/services/proveedores.service';
import { SeniatService } from 'src/modules/services/seniat.service';
import { ServicioBasicoService } from 'src/modules/services/servicios_basicos.service';
import { ViaticosService } from 'src/modules/services/viaticos.service';

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
