import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import { Login } from "./../../../models/login";
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubo } from 'src/models/cubos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @ViewChild("cajaemail") cajaEmailRef!: ElementRef;
  @ViewChild("cajapassword") cajaPasswordRef!: ElementRef;
  public cubos!: Array<Cubo>;

  constructor(
    private _serviceLogin: ServiceLogin,
    private _serviceCubos: ServiceCubos
  ){}

  login(): void{
    var email = this.cajaEmailRef.nativeElement.value;
    var password = this.cajaPasswordRef.nativeElement.value;
    var login = new Login(email, password);
    this._serviceLogin.getLogin(login).subscribe(response =>{
      this._serviceLogin.setToken(response.response);
      console.log(response.response);
    })
  }

  mostrarCubos() {
    this._serviceCubos.getCubos().then(response =>{
      this.cubos = response;
    })
  }
}