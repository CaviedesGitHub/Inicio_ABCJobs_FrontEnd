export class Company {
  nombre: string;
  tipo: string;
  correo: string;
  celular: string;
  contacto: string;
  pais: string;
  ciudad: string;
  direccion: string;
  id_usuario: number;
  is_active: boolean;
  estado: string;

  constructor(nombre: string, tipo: string, correo: string, celular: string,
    contacto: string, pais: string, ciudad: string, direccion: string,
    id_usuario: number, is_active: boolean, estado: string){
      this.nombre = nombre;
      this.tipo = tipo;
      this.correo = correo;
      this.celular = celular;
      this.contacto= contacto;
      this.pais = pais;
      this.ciudad = ciudad;
      this.direccion = direccion;
      this.id_usuario = id_usuario;
      this.is_active = is_active;
      this.estado = estado;
    }

}
