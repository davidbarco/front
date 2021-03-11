import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import{Observable, observable} from "rxjs";


@Injectable({
   providedIn: 'root'
})
export class PeliculaService{

  


     constructor(
        private _http: HttpClient
     ){
       
     }
     /* metodo para sacar todas las peliculas */
     getPeliculas(atletas: string){
        
        return this._http.get(atletas);

     }

}