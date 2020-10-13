import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo : any [] =[];
  constructor( private http: HttpClient) {
    //console.log("Servicio cargado");

    this.cargarInfo();
    this.cargaEquipo();
    
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) =>{
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargaEquipo (){
    this.http.get('https://angular-html-portafolio-249c2.firebaseio.com/equipo.json')
      .subscribe( (resp: any []) =>{
        this.equipo= resp;
        console.log(this.equipo);
      });
  }

}
