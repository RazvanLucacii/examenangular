import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { CubosComponent } from "./components/cubos/cubos.component";
import { LoginComponent } from "./components/login/login.component";
import { CubomarcasComponent } from "./components/cubomarcas/cubomarcas.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { PerfilusuarioComponent } from "./components/perfilusuario/perfilusuario.component";
import { ComprasusuarioComponent } from "./components/comprasusuario/comprasusuario.component";
import { InsertarpedidoComponent } from "./components/insertarpedido/insertarpedido.component";

const appRoutes : Routes = [
    {
        path: "", component: CubosComponent
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "detallescubo/:idCubo", component: LoginComponent
    },
    {
        path: "cubomarcas/:marca", component: CubomarcasComponent
    },
    { 
        path: "registro", component: RegistroComponent
    },
    { 
        path: "perfilusuario", component: PerfilusuarioComponent
    },
    { 
        path: "compras", component: ComprasusuarioComponent
    },
    { 
        path: "insertarpedido/:id", component: InsertarpedidoComponent
    },
    
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);