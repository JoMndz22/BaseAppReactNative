export interface CardUser {
  id?: string;
  secuencia?: string;
  local?: string;
  tipoUsuario?: string;
  tipoServicio?: string;
  medidor?: string;
  numeroCuenta?: string;
  direccion?: string;
  geo?: boolean;
  ruta?: string;
  metrosCubicos?: string;
  factura?: string | null | boolean;
}

export interface CardUserProps {
  data: CardUser;
}
