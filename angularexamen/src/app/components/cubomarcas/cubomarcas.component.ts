import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubo } from 'src/models/cubos';

@Component({
  selector: 'app-cubomarcas',
  templateUrl: './cubomarcas.component.html',
  styleUrls: ['./cubomarcas.component.css']
})
export class CubomarcasComponent implements OnInit {
  public cubos!: Array<Cubo>;

  constructor(
    private _serviceCubos: ServiceCubos
  ){}

  ngOnInit(): void {
    
  }

  mostrarCubos(marca: string): void{
    this._serviceCubos.findmarcas(marca).then(response =>{
      this.cubos = response;
    })
  }
}
