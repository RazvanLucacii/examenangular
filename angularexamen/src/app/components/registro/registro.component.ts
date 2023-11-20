import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import { Login } from "./../../../models/login";
import { Registro } from 'src/models/registro';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajaemail") cajaEmailRef!: ElementRef;
  @ViewChild("cajapassword") cajaPasswordRef!: ElementRef;
  @ViewChild("cajaid") cajaIdRef!: ElementRef;

  constructor(
    private _serviceRegistro: ServiceLogin,
  ){}

  registro(): void{
    var idUsuario = parseInt(this.cajaIdRef.nativeElement.value);
    var nombre = this.cajaNombreRef.nativeElement.value;
    var email = this.cajaEmailRef.nativeElement.value;
    var password = this.cajaPasswordRef.nativeElement.value;
    var register = new Registro(idUsuario, nombre, email, password);
    this._serviceRegistro.getRegistro(register).subscribe(response =>{
      this._serviceRegistro.setToken(response.response);
      console.log(response.response);
    })
  }
}
