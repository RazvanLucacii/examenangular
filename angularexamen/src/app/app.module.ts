import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CubosComponent } from './components/cubos/cubos.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CubomarcasComponent } from './components/cubomarcas/cubomarcas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingProvider, routing } from './app.routing';
import { ServiceLogin } from './services/service.login';
import { ServiceCubos } from './services/service.cubos';
import { PerfilusuarioComponent } from './components/perfilusuario/perfilusuario.component';
import { ComprasusuarioComponent } from './components/comprasusuario/comprasusuario.component';
import { InsertarpedidoComponent } from './components/insertarpedido/insertarpedido.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CubosComponent,
    LoginComponent,
    RegistroComponent,
    CubomarcasComponent,
    PerfilusuarioComponent,
    ComprasusuarioComponent,
    InsertarpedidoComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule, FormsModule,
  ],
  providers: [appRoutingProvider, ServiceLogin, ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }
