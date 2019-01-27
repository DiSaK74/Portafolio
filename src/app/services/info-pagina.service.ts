import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: InfoPagina = {};
  public cargada = false;

  constructor(private http: HttpClient) {
    console.log('Servicio de pagina cargado');
    this.http.get('assets/data/data-pagina.json').subscribe(
      (res: InfoPagina) => {
        this.cargada = true;
        this.info = res;
        console.log('Respuesta llamada', res);
        console.log('Titulo:', res['titulo']);
        console.log('Titulo:', this.info.titulo);
      }
    );
  }
}
