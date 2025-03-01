export enum FacturasProveedorEnum {
  tipoRif = 'TIPO DE RIF',
  rifProveedor = 'RIF DEL PROVEEDOR',
  nombre = 'NOMBRE',
  noFactura = 'N° FACTURA',
  fecha = 'FECHA',
  base = 'BASE IMPONIBLE',
  iva = 'IVA 16%',
  total = 'MONTO TOTAL DE LA FACTURA',
  retieneIva = 'SE RETIENE IVA',
  retencionIva = 'RENCIÓN DE IVA (75%  O 100%)',
  retieneIslr = 'SE RETIENE ISLR',
  retencionIslr = 'RETENCIÓN ISLR',
  retiene1xMil = 'SE RETIENE 1XMIL',
  retencion1xMil = 'RETENCION DEL 1XMIL',
  retiene115 = 'SE RETIENE 1.15',
  retencion115 = 'RETENCIÓN 1,15%',
}

export enum CondominioEnum {
  fecha = 'FECHA',
  mesPagar = 'MES A PAGAR',
  nombre = 'NOMBRE',
  rifCondomio = 'RIF DEL CONDOMIO ',
  noOficina = 'NUMERO DE OFICINA (32° O 34°)',
  montoPagar = 'MONTO A PAGAR',
}

export enum ServiciosTelefonicoEnum {
  fecha = 'FECHA',
  mesPagar = 'MES PAGAR',
  rif = 'RIF',
  nombre = 'NOMBRE',
  montoPagar = 'MONTO PAGAR',
  noOficina = 'N° OFICINA',
  noLinea = 'NUMERO LINEA',
}

export enum ServiciosElecAseoEnum {
  fecha = 'FECHA',
  mesPagar = 'MES PAGAR',
  numeroOficina = 'NUMERO DE OFICINA (32° O 34°)',
  montoPagar = 'MONTO PAGAR',
}

export enum ViatosEnum {
  fecha = 'FECHA',
  nombre = 'NOMBRE',
  cedula = 'CEDULA',
  cargo = 'CARGO',
  concepto = 'CONCEPTO',
}

export enum SeniatEnum {
  fecha = 'FECHA',
  periodoPagar = 'PERIODO PAGAR',
  montoPagar = 'MONTO PAGAR',
  tipo = 'IVA / ISLR',
}

export enum ImpuestosEnum {
  fecha = 'FECHA',
  noFactura = 'N° DEL OBJETO DE RETENCIÓN (FACTURA)',
  montoPagar = 'MONTO PAGAR',
  tipo = '1XMIL / 1,15%',
}

export enum Nomina {
  fecha = 'FECHA',
  sueldo = 'SUELDOS Y SALARIOS',
  primas = 'PRIMAS',
  complementos = 'COMPLEMENTOS',
  asistenciaSE = 'ASISTENCIA SOCIOECONOMICA',
  aguinaldos = 'AGUINALDOS',
  bonoVacacional = 'BONO VACACIONAL',
  otrasSubvenciones = 'OTRAS SUBVENCIONES',
  prestacionesSociales = 'PRESTACIONES SOCIALES',
  retencionesIVSS = 'RETENCIONES DE IVSS',
  retencionSPF = 'RETENCION DEL SPF',
  retencionFAOV = 'RETENCION DE FAOV',
  comisionesBancarias = 'COMISIONES BANCARIAS',
}
