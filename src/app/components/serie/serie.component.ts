import { Component, OnInit } from '@angular/core';
import {PeliculaService} from '../../services/pelicula.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
  providers:[PeliculaService],
})
export class SerieComponent implements OnInit {
  public categorias;
  public plata;
  public bronze;

  constructor(
    private _peliculaService: PeliculaService
  ) { }

  ngOnInit(): void {
    this._peliculaService.getPeliculas('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json').subscribe((res: any)=>{
      var oro = 0
      for (let index = 0; index < res.length; index++) {
        
         oro += res[index].gold;
        
      }
      
      this.categorias = oro;

      var silver = 0
      for (let index = 0; index < res.length; index++) {
        
        silver += res[index].silver;
       
     }
     this.plata= silver;

     var bronze=0
     for (let index = 0; index < res.length; index++) {
        
     bronze += res[index].bronze;
     
   }
    this.bronze = bronze 
    
    })
  }

}
