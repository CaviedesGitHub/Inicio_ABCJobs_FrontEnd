import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { PerfilProyecto } from '../Perfil-proyecto';
import { CompanyService } from '../Company.service';
import { Habil } from '../Habil';

@Component({
  selector: 'app-Perfl-agregar',
  templateUrl: './Perfl-agregar.component.html',
  styleUrls: ['./Perfl-agregar.component.css']
})
export class PerflAgregarComponent implements OnInit {
  perfilForm!: FormGroup;
  lstHabils: Array<Habil> = [];
  lstHT: Array<Habil> = [];
  lstHB: Array<Habil> = [];
  lstHP: Array<Habil> = [];
  selectedValue:any;
  selectedValue2:any;
  selectedHT:any;
  selectedHB:any;
  selectedHP:any;
  selectedH:any;

  @ViewChild('lstHT') lstHT2: ElementRef | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private companyService: CompanyService
  ) { }

  getSkills(){
    this.companyService.getSkills().subscribe(s=>{
      this.toastr.success("Confirmation", "List created")
      this.lstHabils=s
      for (let i=0; i < this.lstHabils.length; i++){
        if (this.lstHabils[i].tipo=="TECNICA"){
          this.lstHT.push(this.lstHabils[i])
        }
      }
      for (let i=0; i < this.lstHabils.length; i++){
        if (this.lstHabils[i].tipo=="BLANDA"){
          this.lstHB.push(this.lstHabils[i])
        }
      }
      for (let i=0; i < this.lstHabils.length; i++){
        if (this.lstHabils[i].tipo=="PERSONALIDAD"){
          this.lstHP.push(this.lstHabils[i])
        }
      }
    })
  }

  createPerfil(perfil: PerfilProyecto){
    this.toastr.success("Confirmation", this.selectedValue)
    //this.selectedH=this.selectedHT+','+this.selectedHB+','+this.selectedHP
    //this.perfilForm.controls['lstHabils'].setValue(String(this.selectedH));
    this.companyService.createPerfil(perfil,1).subscribe(res=>{
      console.info("The Profile was created: ", res)
      this.toastr.success("Confirmation", "Profile Created")
      this.perfilForm.reset();
    })
  }

  cancelCreation(){
    this.perfilForm.reset();
  }


  ngOnInit() {
    this.perfilForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      lstHabils: [""]
    })
    this.getSkills()
  }
  
    
}

