export interface Profile {
  id: number;
  cedula: number;
  nombres: string;
  apellidos: string;
  genero: string;
  direccion: string;
  cargo: string;
  ingreso: string;
  estatus: boolean;
  autorizacion: string;
  updatedAt: Date;
}
