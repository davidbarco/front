import { Component, OnInit } from '@angular/core';
import {PeliculaService} from '../../services/pelicula.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
  providers:[PeliculaService],
})
export class PeliculaComponent implements OnInit {
  user;
  public atletas;
 
  constructor(
    private _peliculaService: PeliculaService,
    private userService: UserService,
  ) {
    
    this.userService.authenticate$.subscribe(
      userAuth => {

        this.user = userAuth

      }
    )
   }

  ngOnInit(): void {
    
    this._peliculaService.getPeliculas('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json').subscribe((res: any)=>{
      this.atletas = res;
     
    })




  }

}
