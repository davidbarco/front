import{ModuleWithProviders} from "@angular/core";
import{Routes,RouterModule} from "@angular/router";

import { AuthGuard } from './guards/auth.guard';

/* importar componentes */

//importar componenets a los cuales les quiero hacer una pagina exculsiva
import{ContentComponent} from "./components/content/content.component";
import{PeliculaComponent} from "./components/pelicula/pelicula.component";
import{SerieComponent} from "./components/serie/serie.component";
import{ErrorComponent} from "./components/error/error.component";
import { LoginComponent } from "./components/login/login.component";
import { CreateUserComponent } from "./components/create-user/create-user.component";


//array de rutas
const appRoutes: Routes=[

   {path: "", component: CreateUserComponent},
   {path: "home", canActivate: [AuthGuard], component: ContentComponent},
   { path: 'login', component: LoginComponent },
   { path: 'registrarUsuario',canActivate: [AuthGuard], component: CreateUserComponent },
   {path: "atleta",canActivate: [AuthGuard], component: PeliculaComponent},
   {path: "categoria",canActivate: [AuthGuard], component: SerieComponent},
   {path: "**", component:ErrorComponent},       
];
    
//exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);