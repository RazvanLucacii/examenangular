import { Component } from '@angular/core';
import { ServiceLogin } from 'src/app/services/service.login';
import { Compra } from 'src/models/compra';

@Component({
  selector: 'app-comprasusuario',
  templateUrl: './comprasusuario.component.html',
  styleUrls: ['./comprasusuario.component.css']
})
export class ComprasusuarioComponent {
  public pedidos!: Array<Compra>;

  constructor(
    private _serviceLogin: ServiceLogin
  ){}

  ngOnInit(): void {
    this.mostrarCompras();
  }

  mostrarCompras(): void{
    this._serviceLogin.getCompras().subscribe(response =>{
      this.pedidos = response;
    })
  }
}
