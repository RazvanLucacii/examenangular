import { Component } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubo } from 'src/models/cubos';

@Component({
  selector: 'app-cubos',
  templateUrl: './cubos.component.html',
  styleUrls: ['./cubos.component.css']
})
export class CubosComponent {
  public cubos!: Array<Cubo>;

  constructor(
    private _serviceCubos: ServiceCubos,
  ){}

    ngOnInit(): void {
      this.mostrarCubos();
    }

  mostrarCubos() {
    this._serviceCubos.getCubos().subscribe(response =>{
      this.cubos = response;
    })
  }
}
