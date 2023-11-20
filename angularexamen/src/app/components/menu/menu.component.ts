import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
  export class MenuComponent implements OnInit {
    public marcas!: string;
    constructor(
      private _serviceCubos: ServiceCubos
    ){}
    
    ngOnInit(): void {
      this.marcas = this._serviceCubos.getCubos();
    }
    
  }
