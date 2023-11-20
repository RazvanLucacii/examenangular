import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceLogin } from 'src/app/services/service.login';
import { Cubo } from 'src/models/cubos';

@Component({
  selector: 'app-insertarpedido',
  templateUrl: './insertarpedido.component.html',
  styleUrls: ['./insertarpedido.component.css']
})
export class InsertarpedidoComponent {
  @ViewChild("cajaidcubo") cajaIdCuboRef!: ElementRef;
  public series!: Array<Cubo>;

  constructor(
    private _serviceLogin: ServiceLogin,
    private _router: Router
  ){}

  ngOnInit(): void {
    this.insertarPedido();
  }

  insertarPedido(): void {
    var idCubo = parseInt(this.cajaIdCuboRef.nativeElement.value);
    
    var newCubo = new Cubo(idCubo);
    this._serviceLogin.create(newCubo, token).subscribe(response =>{
      console.log(response)
      this._router.navigate(["/"]);
    })
  }
}
