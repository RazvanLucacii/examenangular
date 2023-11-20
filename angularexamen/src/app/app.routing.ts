import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { CubosComponent } from "./components/cubos/cubos.component";
import { LoginComponent } from "./components/login/login.component";
import { CubomarcasComponent } from "./components/cubomarcas/cubomarcas.component";
import { RegistroComponent } from "./components/registro/registro.component";

const appRoutes : Routes = [
    {
        path: "", component: CubosComponent
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "cubomarcas/:idCubo", component: CubomarcasComponent
    },
    { 
        path: "registro", component: RegistroComponent
    },
    
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);