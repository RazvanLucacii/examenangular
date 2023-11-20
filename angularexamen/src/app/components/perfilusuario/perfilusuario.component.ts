import { Component, OnInit } from '@angular/core';
import { ServiceLogin } from 'src/app/services/service.login';
import { Registro } from 'src/models/registro';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.component.html',
  styleUrls: ['./perfilusuario.component.css']
})
export class PerfilusuarioComponent implements OnInit {
  public usuario!: Registro;

  constructor(
    private _serviceLogin: ServiceLogin
  ){}

  ngOnInit(): void {
    this.mostrarPerfil();
  }

  mostrarPerfil(): void{
    this._serviceLogin.getPerfil().subscribe(response =>{
      this.usuario = response;
    })
  }
}
