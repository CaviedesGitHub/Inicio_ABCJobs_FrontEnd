export class Proyecto {
}


export class Project {
    id: number;
    id_emp: number;
    nombre: string;
    descripcion: string;
    
    constructor(id: number, id_emp: number, nombre: string, descripcion: string){
        this.id=id;
        this.id_emp = id_emp;
        this.nombre = nombre;
        this.descripcion = descripcion;
      }
  
  }
  

  import { Project } from "./Project";
  import { Perfil } from "./Perfil";
  
  export class ProjectDetail extends Project{
      empresa: string;
      perfiles: Array<Perfil> = [];
  
      constructor(id: number, id_emp: number, nombre: string, 
          descripcion: string, empresa: string, perfiles: Array<Perfil>){
          super(id, id_emp, nombre, descripcion)
          this.empresa=empresa;
          this.perfiles=perfiles;
        }
  }

  import { Habilidad } from "./Habilidad";

export class Perfil {
    id: number;
    nombre: string;
    id_proy: number;
    id_perfil: number;
    id_cand: number;
    candidato: string;
    lstHT: Array<Habilidad>;
    lstHB: Array<Habilidad>;
    lstHP: Array<Habilidad>;

    constructor(id: number, nombre: string, id_proy: number, id_perfil: number,
        id_cand: number, candidato: string,
        lstHT: Array<Habilidad>, lstHB: Array<Habilidad>, lstHP: Array<Habilidad>){

        this.id=id;
        this.nombre=nombre
        this.id_proy=id_proy
        this.id_perfil=id_perfil
        this.id_cand=id_cand
        this.candidato=candidato
        this.lstHT = lstHT;
        this.lstHB = lstHB;
        this.lstHP = lstHP;
      }

}

export class Habilidad {
    id_ph: number;
    valoracion: string;
    id: number;
    nombre: string;
    tipo: string;

    constructor(id_ph: number, valoracion: string, id: number, nombre: string, tipo:string){
        this.id_ph=id_ph;
        this.valoracion = valoracion;
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
      }    
}
